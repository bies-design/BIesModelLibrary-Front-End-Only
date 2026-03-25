//landing page
'use client';
import React, { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer';
import HeroAnimation from '@/components/animation/HeroAnimation';
import { itemsQuery } from '../globalUse';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import PostCard from '@/components/cards/PostCard';
import { getPostsByScroll } from '@/lib/actions/post.action';
import { useNativeInView } from '@/hooks/useIntersectionObserver';
import { Loader2 } from 'lucide-react';

const Home = () => {
  const { data:session,status } = useSession();
  //for itemsQuery
  const [isSelectId, setIsSelectId] = useState('ALL');
  //for Newest Hottest Query
  const [isQueryArrange, setIsQueryArrange] = useState('Newest')
  const SearchParams = useSearchParams();
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null); //ref 用來綁定底部的 DOM 元素
  const isIntersecting = useNativeInView(loadMoreRef, '400px');
  const searchKeyword = SearchParams.get('search') || '';

  useEffect(() => {
    if(SearchParams.get('status') === 'success'){
      alert("貼文上傳成功!");
      // 靜默清除網址上的 ?status=success，保持網址整潔且防止重新整理重複觸發
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  },[SearchParams])

  const fetchPosts = async (currentPage: number, isReset: boolean = false) => {
    setIsLoading(true);
    const result = await getPostsByScroll(currentPage, 9, isSelectId, isQueryArrange, searchKeyword);
    
    if (result.success && result.data) {
      if (isReset) {
        setPosts(result.data);
      } else {
        setPosts((prev) => [...prev, ...result.data!]);
      }
      setHasMore(result.hasMore || false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    fetchPosts(1, true);
  }, [isSelectId, isQueryArrange, searchKeyword]);
  
  // 監聽 isIntersecting 的變化來抓資料 達成無限下滑抓資料功能
  useEffect(() => {
    if (isIntersecting && hasMore && !isLoading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchPosts(nextPage, false);
    }
  }, [isIntersecting, hasMore, isLoading, page]);

  return (
    <div className='mt-20'>
      <div className="flex flex-col items-center gap-8">
        <Image 
          src="/icons/GOMOREonly.svg" 
          width={300} 
          height={300} 
          alt="GoMore Logo" 
          className="w-full max-w-[200px] md:max-w-[300px] 2xl:max-w-[500px] h-auto"
        />
        <Image 
          src="/Connect More, Achieve More.svg" 
          width={500} 
          height={500} 
          alt="Slogan" 
          className="invert dark:invert-0 w-full max-w-[300px] md:max-w-[500px] 2xl:max-w-[750px] h-auto"
        />
        <p className="text-[#5B5B5B] dark:text-[#BEBEBE] text-lg md:text-xl 2xl:text-2xl font-almarai">Build a 3D Model Community--Share Knowledge,Connect Partners</p>
        <div className='flex gap-5'>
          {status === "unauthenticated" && (<a href="/sign-up">  
            <button className='hover-lift hover:cursor-pointer relative shadow-[inset_0_1px_2px_#ffffffbf] font-inter font-semibold text-white text-sm px-4 py-2 rounded-lg'
            style={{
              background: `
                radial-gradient(141.42% 141.42% at 100% 0%, #fff6, #fff0),
                radial-gradient(140.35% 140.35% at 100% 94.74%, #4A6F9B, #fffbeb00),
                radial-gradient(89.94% 89.94% at 18.42% 15.79%, #7A2238, #41d1ff00)
              `
              }}
              >Get Started
            </button>
          </a>)}
        </div>
      </div>

      {/* 2. 替換掉原本的文字 div */}
      {/* 調整 mt 來控制與上方的距離，w-full 確保寬度 */}
      <div className='flex flex-col items-center mt-10 w-full overflow-hidden max-sm:hidden'>
          <HeroAnimation/>
      </div>
      
      <div className='mx-auto flex flex-col items-center gap-6 mt-10 w-[90%]'>
        <div className='sm:flex max-sm:grid max-sm:grid-flow-row max-sm:grid-cols-4 gap-10 items-center w-[95%] h-35'>
          {/* buttons query */}
          {itemsQuery.map((item) => {
            const isSelected = isSelectId === item.id;
            return (
              <button 
                //declare this is a unique button
                key={item.id}
                onClick={()=>{setIsSelectId(item.id)}}//click and update selected button Id
                className={`relative transition-all bg-black/20 flex flex-col justify-center items-center gap-2 rounded-[8px] h-full w-[20%] min-w-[61px] hover:cursor-pointer hover-lift font-abeezee text-sm text-[#B8B8B8]
                  ${isSelected ? "p-[1px] bg-gradient-to-r from-pink-500 to-purple-500":"border-1 border-[#B8B8B8]"}
                  `}     
                >
                  {/* 2. 新增子層 (遮罩)：負責內容排版、顯示深色背景來「吃掉」中間的漸層 */}
                  <div className={`
                    w-full h-full rounded-[7px] flex flex-col justify-center items-center gap-2
                    ${isSelected ? "bg-gray-700" : ""} // 關鍵！選中時要用實心深色背景蓋住漸層 (請換成您背景的深色代碼)
                  `}>
                      <item.icon   
                      height={30}
                      width={30}
                      className=''
                        />
                      <p>{item.label}</p>
                    </div>
                </button>
                
            )
          })}
        </div>
        {/* Newest Hottest query buttoms */}
          <div className='flex justify-start w-[95%]'>
            <div className='flex px-[8px] py-[8px] gap-[16px] h-[60px] rounded-lg border-1.5 '>
              <button key="Newest" onClick={()=>{setIsQueryArrange("Newest")}} 
                className={`hover-lift px-[16px] py-[8px] rounded-lg text-sm hover:cursor-pointer ${isQueryArrange === "Newest" ? "bg-primary":""}`}><p>Newest</p></button>
              <button key="Hottest" onClick={()=>{setIsQueryArrange("Hottest")}} 
                className={`hover-lift px-[16px] py-[8px] rounded-lg text-sm hover:cursor-pointer ${isQueryArrange === "Hottest" ? "bg-primary":""}`}>Hottest</button>
            </div>
          </div>
          <div className='w-[95%]'>
            {/* 分割容器成3等份 */}
            <div className='flex flex-wrap gap-6 max-sm:justify-center items-center'>
              {posts.map((post)=>(
                <PostCard 
                  key={post.id}
                  dbId={post.id}
                  shortId={post.shortId}
                  coverImage={post.coverImage}
                  type={post.type}
                  title={post.title}
                />
                ))}
            </div>  
            
            {/* 下面div 進入視角觸發抓取資料 */}
            <div ref={loadMoreRef} className='flex justify-center mt-8 mb-8 h-10'>
              {isLoading && (
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>Loading more...</span>
                </div>
              )}
              {!hasMore && posts.length > 0 && (
                <p className='text-sm text-[#5B5B5B] dark:text-[#BEBEBE] font-abeezee'>
                  You have reached the end.
                </p>
              )}
              {!hasMore && posts.length === 0 && !isLoading && (
                <p className='text-sm text-[#5B5B5B] dark:text-[#BEBEBE] font-abeezee'>
                  No models found in this category.
                </p>
              )}
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;