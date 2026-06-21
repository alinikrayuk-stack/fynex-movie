import { motion } from 'framer-motion'
import { Play, Star, Clock, Calendar } from 'lucide-react'

const featuredContent = [
  {
    id: 1,
    title: 'راز کوهستان',
    type: 'series',
    year: '1402',
    rating: '8.5',
    episodes: '24',
    image: 'https://images.pexels.com/photos/3319690/pexels-photo-3319690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'داستانی هیجان‌انگیز در دل کوهستان‌های ایران'
  },
  {
    id: 2,
    title: 'پرواز پنهانی',
    type: 'movie',
    year: '1403',
    rating: '9.1',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'یک فیلم اکشن پر از هیجان و ماجراجویی'
  },
  {
    id: 3,
    title: 'خانه به دوش',
    type: 'series',
    year: '1401',
    rating: '8.9',
    episodes: '30',
    image: 'https://images.pexels.com/photos/2524388/pexels-photo-2524388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'کمدی خانوادگی محبوب و پرمخاطب'
  },
  {
    id: 4,
    title: 'غریبه',
    type: 'movie',
    year: '1403',
    rating: '8.7',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'درام اجتماعی عمیق و تکان‌دهنده'
  },
  {
    id: 5,
    title: 'شب‌های تهران',
    type: 'series',
    year: '1402',
    rating: '9.3',
    episodes: '18',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'معمایی پیچیده در تهران امروز'
  },
  {
    id: 6,
    title: 'عشق و باران',
    type: 'movie',
    year: '1403',
    rating: '8.4',
    image: 'https://images.pexels.com/photos/1533779/pexels-photo-1533779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'داستانی عاشقانه در شمال ایران'
  }
]

const categories = [
  { id: 'all', name: 'همه', icon: Play },
  { id: 'movies', name: 'فیلم‌ها', icon: Play },
  { id: 'series', name: 'سریال‌ها', icon: Star },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-dark-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl sm:text-3xl bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Fynex Movies
            </motion.h1>

            <nav className="hidden md:flex items-center gap-8">
              {categories.map((cat) => (
                <motion.a
                  key={cat.id}
                  href="#"
                  className="text-dark-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.name}
                </motion.a>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-l from-purple-600 to-pink-600 px-6 py-2 rounded-full font-medium text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-glow"
            >
              ورود / ثبت‌نام
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-transparent to-dark-900/90" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6"
          >
            <span className="bg-gradient-to-l from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              سینمایی که تو را می‌جنباند
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-dark-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
          >
            بهترین فیلم‌ها و سریال‌های ایرانی را در Fynex Movies تماشا کنید.
            محتوای اختصاصی با کیفیت بالا.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 bg-gradient-to-l from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg"
            >
              <Play className="w-5 h-5" />
              شروع تماشا
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-dark-700/80 backdrop-blur px-8 py-4 rounded-full font-semibold text-lg border border-dark-600 hover:bg-dark-600 transition-all"
            >
              اطلاعات بیشتر
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-2xl sm:text-3xl mb-8"
        >
          پیشنهاد ما
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl overflow-hidden bg-dark-800 shadow-xl hover:shadow-glow-lg transition-all cursor-pointer"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />

                <motion.div
                  initial={false}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-glow"
                  >
                    <Play className="w-8 h-8 text-white fill-white" />
                  </motion.button>
                </motion.div>

                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'series'
                      ? 'bg-purple-600/90 text-white'
                      : 'bg-pink-600/90 text-white'
                  }`}>
                    {item.type === 'series' ? 'سریال' : 'فیلم'}
                  </span>
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-1 bg-dark-900/80 backdrop-blur px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-white">{item.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-dark-400 text-sm mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center gap-4 text-dark-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </div>
                  {item.episodes && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.episodes} قسمت
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 border-t border-dark-700/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h4 className="font-display text-xl bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fynex Movies
            </h4>

            <div className="flex items-center gap-6 text-dark-400 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">درباره ما</a>
              <a href="#" className="hover:text-purple-400 transition-colors">تماس با ما</a>
              <a href="#" className="hover:text-purple-400 transition-colors">قوانین</a>
              <a href="#" className="hover:text-purple-400 transition-colors">حریم خصوصی</a>
            </div>
          </div>

          <div className="text-center text-dark-500 text-sm mt-8">
            © ۱۴۰۳ Fynex Movies. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  )
}
