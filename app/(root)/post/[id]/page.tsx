// app/post/[shortId]/page.tsx
import { getPostDetail, getRelatedPostsByIds } from '@/lib/actions/post.action';
import { notFound, forbidden } from 'next/navigation';
import { ArrowDownToLine, ChevronRight, Dot, File, Rotate3D, Star } from 'lucide-react';
import Link from 'next/link';
import MediaGallery from '@/components/post/MediaGallery';
import ActionButtons from '@/components/post/ActionButtons';
import CommentSection from '@/components/post/CommentSection';
import PostCard from '@/components/cards/PostCard';
import Footer from '@/components/Footer';
import { verifyToken } from '@/app/api/generate-token/verifyToken';

export default async function PostDetailPage({ 
    params, 
    searchParams     // 為了抓附在URL上的 token. mark.hsieh++
}:{ 
    params:Promise<{ id:string }> 
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>  // mark.hsieh++ - Promise 版本的 searchParams，使用 async/await 來獲取 searchParams 的值 
}) {
    const { id } = await params;
    const { token } = await searchParams; // mark.hsieh ++ - ?token=xxx

    // 在這邊把preaAssingedimage url傳入
    const result = await getPostDetail(id);

    // 如果找不到貼文，導向 404 頁面
    if (!result.success || !result.data) {
        notFound();
    }

    // 驗證邏輯：優先驗證 URL 中的 token，如果沒有或無效，再檢查 session cookie
    // mark.hsieh++
    let isAuthorized = false; // 預設為未授權
    if (token && typeof token === 'string') {
        const isValid = await verifyToken(token, id); 
        console.log("Token 驗證結果:", isValid);

        if (!isValid.valid) {
            // token 無效，導向 403 頁面或顯示錯誤訊息
            const errorReason = isValid.reason || "Invalid or expired token.";
            const errorMessage = isValid.message || "You do not have permission to access this content.";
            return (
                <section className="container mx-auto py-10">
                    <div className="bg-danger-50 border-1 border-danger-200 p-6 rounded-xl">
                        <h2 className="text-danger font-bold text-xl">Access Denied</h2>
                        <p className="text-danger-600 mt-2">{errorReason}</p>
                        <p className="text-danger-600 text-sm mt-1">{errorMessage}</p>
                    </div>
                </section>
            );
        } else {
            isAuthorized = true; // token 有效，授權訪問
        }
    } 

    const post = result.data;

    const relatedPostsResult = await getRelatedPostsByIds(post.relatedPosts || []);
    const relatedPosts = relatedPostsResult.success ? relatedPostsResult.data : [];

    const formatDate = (date:Date): string =>{  
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    }

    return (
        <div className=" min-h-screen text-[#E4E4E7] pt-12 font-abeezee">
            {/* 頂部麵包屑 (Breadcrumbs) */}
            <div className="max-w-[1400px] mx-auto px-6 mb-6 text-sm text-[#A1A1AA]">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-black/80 dark:text-amber-50">{post.title}</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mb-4">
                
                {/* ================= 左側：主要內容區 ================= */}
                <div className="flex flex-col gap-8 min-w-0">
                
                    {/* 1. 媒體展示區 (大圖/Viewer + 縮圖)*/}
                    <MediaGallery post={post}/>
                
                    {/* 2. 描述區塊 (Description) */}
                    <div className="mt-4">
                        <h2 className="text-xl text-white mb-4">Description</h2>
                        <div className="text-[#A1A1AA] text-sm leading-relaxed whitespace-pre-wrap">
                            {post.description || 'No description provided.'}
                        </div>
                    </div>

                    {/* 3. 留言區塊 (Comments)*/}
                    <CommentSection postId={post.id} postShortId={post.shortId} postAuthorId={post.uploaderId}/>
                    {/* 4.關聯模型區塊 */}
                    <div className="mt-8 pt-8">
                        <h2 className="flex items-center gap-3 text-xl text-white mb-6">
                            <p>Related models</p> 
                            <ChevronRight size={20} className='text-[#A1A1AA]'/>
                        </h2>
                        <div className="flex gap-4 items-center overflow-x-scroll p-5 rounded-2xl">
                            {relatedPosts && relatedPosts.length > 0 ? (
                                relatedPosts.map((relPost: any) => (
                                    <PostCard 
                                        key={relPost.id}
                                        dbId={relPost.id}
                                        shortId={relPost.shortId}
                                        coverImage={relPost.coverImage}
                                        type={relPost.type}
                                        title={relPost.title}
                                        isCollectedInitial={relPost.isCollected}
                                        teamColor={relPost.team?.color}
                                        teamName={relPost.team?.name}
                                    />
                                ))
                            ):(
                                <p className="text-[#A1A1AA] text-sm">No related models.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* ================= 右側：浮動資訊欄 (Sticky Sidebar) ================= */}
                <div className="relative">
                    <div className="sticky top-24 flex flex-col gap-6">
                        
                        {/* 標題與基本資訊 */}
                        <div className='font-abeezee'>
                            <div className="font-abeezee glass-panel inline-block text-xs text-black/80 dark:text-white px-3 py-1 rounded-full mb-5">
                                {post.type === '3D' ? 
                                    (<div className='flex items-center gap-1'><Rotate3D size={16}/><p>3D model</p></div>)
                                    :(<div className='flex items-center gap-1'><File size={16}/><p>2D file</p></div>)
                                }
                            </div>
                            <h1 className="text-3xl font-abeezee bg-linear-to-b from-white to-[#d1d1da] bg-clip-text text-transparent mb-4 leading-tight">{post.title}</h1>
                            {/* 分類 */}
                            <div className="mx-auto mb-6 text-sm text-[#A1A1AA]">
                                {
                                    post.type === '3D' ? 
                                    (<Link href="/" className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent hover:text-white transition">3D models</Link>)
                                    :(<Link href="/" className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent hover:text-white transition">2D files</Link>)
                                }
                                
                                <span className="mx-3">{'>'}</span>
                                <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent">{post.category || 'none'}</span>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-[#A1A1AA] mb-4">
                                <svg width="0" height="0" style={{ position: 'absolute' }}>
                                    <defs>
                                        <linearGradient id="star-gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#db4c70" />
                                            <stop offset="100%" stopColor="#D70036" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                
                                <div className="flex items-center">
                                    <Star size={14} fill='url(#star-gradient)' stroke='none' />
                                    <Star size={14} fill='url(#star-gradient)' stroke='none' />
                                    <Star size={14} fill='url(#star-gradient)' stroke='none' />
                                    <Star size={14} fill='url(#star-gradient)' stroke='none' />
                                    <Star size={14} fill='url(#star-gradient)' stroke='none' />
                                    <span className="ml-2 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">{`${0} reviews`}</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-1 text-[#A1A1AA]'>
                                <div className='flex gap-1 items-center text-sm'>
                                    <ArrowDownToLine size={14}/>
                                    <span>{1.2}k</span>
                                </div>
                                <Dot size={14}/>
                                <div className='flex gap-1 items-center text-sm'>
                                    <span>{41} ratings</span>
                                </div>
                                <Dot size={14}/>
                                <div className='flex gap-1 items-center text-sm'>
                                    <span>{100} comments</span>
                                </div>    
                            </div>
                        </div>

                        {/* 操作按鈕 */}
                        <div className="flex flex-col gap-3">
                            <ActionButtons post={post}/>
                        </div>

                        {/* 詳細資料表 */}
                        <div className="font-abeezee text-left">
                            <h3 className="bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent mb-5">Details</h3>
                            <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
                                
                                    <span className="w-32 flex-shrink-0 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent mr-px]">Last update</span>
                                    <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent">{formatDate(post.updatedAt)}</span>
                                
                                
                                    <span className="w-32 flex-shrink-0 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">Published</span>
                                    <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent">{formatDate(post.createdAt)}</span>
                                
                                
                                    <span className="w-32 flex-shrink-0 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">Category</span>
                                    <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent hover:underline cursor-pointer">{post.category || "none"}</span>
                                
                                
                                    <span className="w-32 flex-shrink-0 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">License terms</span>
                                    <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparent hover:underline cursor-pointer">{post.permission || 'Standard License'}</span>
                                
                                
                                    <span className="w-32 flex-shrink-0 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">Uploader</span>
                                    <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparenth">{post.uploader?.userName || 'Unknown'}</span>

                                    <span className="w-32 flex-shrink-0 bg-linear-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent">Team</span>
                                    <span className="bg-linear-to-b from-white to-[#8DB2E8] bg-clip-text text-transparenth">{post.team?.name || 'none'}</span>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}