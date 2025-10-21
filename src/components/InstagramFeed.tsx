import { Instagram, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589270018935-ae7e307e79b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5zdGFncmFtJTIwc29jaWFsfGVufDF8fHx8MTc2MTA1NTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 324
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1741965134280-9094486efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGxhdGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYxMDU1OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 456
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1694370553022-5c9e89ab2715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHN0eWxpbmd8ZW58MXx8fHwxNzYxMDU1OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 289
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1741969494307-55394e3e4071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwZGVjb3JhdGlvbiUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NjEwNTU5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 512
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1627814034209-95751c1b4ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZGVsaWNpb3VzfGVufDF8fHx8MTc2MTA1MDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 678
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1656439659132-24c68e36b553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmYXN0JTIwZm9vZHxlbnwxfHx8fDE3NjEwMDc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: 423
  },
];

export function InstagramFeed() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white to-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white px-6 py-3 rounded-full mb-4">
            <Instagram className="w-5 h-5" />
            <span style={{ fontWeight: 700 }}>تابعنا على انستجرام</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4" style={{ fontWeight: 800 }}>
            @MegaDeals_Egypt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            شاهد أحدث منتجاتنا وعروضنا اليومية
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  <span className="text-sm md:text-base" style={{ fontWeight: 700 }}>{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:shadow-lg transition-all"
            style={{ fontWeight: 700 }}
          >
            <Instagram className="w-5 h-5" />
            <span>تابعنا للمزيد</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
