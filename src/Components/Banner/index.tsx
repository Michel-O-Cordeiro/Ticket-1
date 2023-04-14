import react from 'react'

export default function Banner({ image }: { image: string }) {
    return (
        <div className="relative overflow-hidden mt-16 flex flex-col justify-center">
            <div className="bg-no-repeat absolute inset-0 bg-cover bg-center filter blur-md" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="relative bg-transparent bg-contain max-w-screen-xl mx-auto ">
                <img className="rounded-md m-auto h-auto py-14" src={image} width={1180} />
            </div>
        </div>
    )
}