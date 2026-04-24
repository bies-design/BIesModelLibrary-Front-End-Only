// utils/cropImage.ts

export const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // 避免跨域問題
        image.src = url
    })

export function getRadianAngle(degreeValue: number) {
    return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
    const rotRad = getRadianAngle(rotation)

    return {
        width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    }
}

/**
 * 取得裁切後的圖片 URL (支援旋轉)
 * @param {string} imageSrc - 圖片來源網址或 Base64
 * @param {Object} pixelCrop - react-easy-crop 回傳的裁切數據 { x, y, width, height }
 * @param {number} rotation - 旋轉角度 (0-360)
 */
export default async function getCroppedImg(
    imageSrc: string,
    pixelCrop: { x: number; y: number; width: number; height: number },
    rotation: number = 0
): Promise<string | null> {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
        return null
    }

    const rotRad = getRadianAngle(rotation)

    // 計算旋轉後圖片的外框大小
    const bBoxSize = rotateSize(image.width, image.height, rotation)

    // 設定 canvas 大小為旋轉後的外框大小
    canvas.width = bBoxSize.width
    canvas.height = bBoxSize.height

    // 將畫布中心平移，進行旋轉，然後再平移回來繪製圖片
    ctx.translate(bBoxSize.width / 2, bBoxSize.height / 2)
    ctx.rotate(rotRad)
    ctx.translate(-image.width / 2, -image.height / 2)

    // 繪製旋轉後的完整圖片
    ctx.drawImage(image, 0, 0)

    // 建立一個新的 canvas 用來擷取裁切的範圍
    const croppedCanvas = document.createElement('canvas')
    const croppedCtx = croppedCanvas.getContext('2d')

    if (!croppedCtx) return null

    croppedCanvas.width = pixelCrop.width
    croppedCanvas.height = pixelCrop.height

    // 從剛剛旋轉好的 canvas 中，把使用者框選的區域擷取出來
    croppedCtx.drawImage(
        canvas,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    )

    // 轉換為 Blob 並回傳 ObjectURL
    return new Promise((resolve) => {
        croppedCanvas.toBlob((blob) => {
            if (!blob) {
                console.error('Canvas is empty')
                return
            }
            resolve(URL.createObjectURL(blob))
        }, 'image/png') // 改用 png 確保去背與畫質
    })
}
