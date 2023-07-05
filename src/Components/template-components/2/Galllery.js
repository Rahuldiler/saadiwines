import Image from 'next/image';



const Gallery = ({images, paddingBottom,columngapcount,openLightbox}) => {
    return (
        <div className="relative flex"
            style={{
                '--hgap': '40px',
                '--vgap': '40px',
                '--animation-duration': '350ms',
                '--columns': '2',
                '--highest-column-gap-count': columngapcount,
                paddingBottom: paddingBottom,
                height: '0',
                marginBottom: 'calc(var(--highest-column-gap-count) * var(--vgap))',
            }}
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    style={{
                        '--item-height': image.itemHeight,
                        '--column': image.column,
                        '--items-in-column': image.itemsInColumn,
                        '--percent-height': image.percentHeight,
                    }}
                    className="Gallery"
                >

                    <Image src={image.image} alt={image.alt} fill className="!relative" />

                </div>
            ))}
        </div>
    );
};

export default Gallery;
