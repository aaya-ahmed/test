import { useEffect, useState } from "react"
import styles from './image.module.scss'
import { status } from "../../../const/status"
import upload from './upload.jpg';
export const ImageFormComponent = ({ images, setImage}: {
    images: any[], setImage: (data: any[]) => void
}) => {
    const [isAdd,setIsAdd]=useState<boolean>(true)
    useEffect(()=>{
        setIsAdd(images.length>0?false:true)
    },[])
    const AddToImages = (e) => {
        if (e.target.files[0].type.includes('image/'))
            setImage([...images, {
                file: e.target.files[0],
                id: images.length,
                name: e.target.files[0].name,
                attachmentUrl: '',
                isMain: images.length == 0 ? true : false,
                status: status.Add
            }])
    }
    const RemoveFromImages = (id) => {
        isAdd?
        setImage(images.filter(p => p.id != id)):
        setImage(images.map(p => { if (p.id == id) p.status = status.Delete; return p }))
    }
    return <>
        <div className={`${styles['container']}`}>
            <div>
                <label className={`${styles['image-label']}`} htmlFor="image">
                    <img src={upload}/>
                </label>
                <input type="file" name="image" accept="image/*" onChange={AddToImages} hidden id="image" />
            </div>
            {images?.map((item) => {
                return <>
                    {item.status!=status.Delete&&
                        (
                            <div className={`${styles['image']}`}>
                                <img src={item.file ? URL.createObjectURL(item.file) : import.meta.env.VITE_baseImageUrl + item.attachmentUrl} />
                                <button type="button" onClick={() => RemoveFromImages(item.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        )
                    }
                </>
            })}

        </div>
    </>
}