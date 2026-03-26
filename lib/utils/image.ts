const getImageUrl = (imageVal: string | null | undefined) => {
    if(!imageVal) return "";
    if(imageVal.startsWith("http")) return imageVal;
    return `${process.env.NEXT_PUBLIC_S3_ENDPOINT_SERVER}/${process.env.NEXT_PUBLIC_S3_IMAGES_BUCKET}/${imageVal}`;
};