import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

// Импорт изображений для баннеров
import bannerSkinz from '../assets/f34a92c7175dfb12bdd2333604c57e6314bbb78f.png';
import bannerCollection from '../assets/collection/banner.png';
import bannerMarket from '../assets/market/banner.png';
import { StickerTitle } from '../entities/sticker/StickerTitle';
const collectionsIcon = '/figma/c603b96d7db051eb74f798ab129dddac597f6aac.svg';

export const SkinTab = () => {
  const banners = [
    {
      id: 1,
      image: bannerSkinz,
    },
    {
      id: 2,
      image: bannerCollection,
    },
    {
      id: 3,
      image: bannerMarket,
    },
  ];

  const handleViewAllClick = () => {
    console.log('View all click');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-[16px]">
        <StickerTitle
          stickerIcon={collectionsIcon}
          title="Collections"
          onViewAllClick={handleViewAllClick}
        />
      </div>

      {/* Banner Slider */}
      <div>
        <div className="relative">
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
            }}
            className="w-full h-[200px] rounded-[12px] overflow-hidden"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div
                  className="w-full h-full relative bg-cover bg-center bg-no-repeat rounded-[12px] overflow-hidden"
                  style={{ backgroundImage: `url(${banner.image})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-4">
            {banners.map((_, index) => (
              <div
                key={index}
                className="custom-bullet w-2 h-2 rounded-full bg-gray-600 cursor-pointer transition-colors duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
