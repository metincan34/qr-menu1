import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const categories = [
    {
      id: 'hot-coffee',
      title: 'Sıcak Kahveler',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
      items: [
        { name: 'Latte', price: '150 ₺' },
        { name: 'Türk Kahvesi', price: '100 ₺' },
        { name: 'Espresso', price: '110 ₺' }
      ]
    },
    {
      id: 'cold-drinks',
      title: 'Soğuk İçecekler',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600',
      items: [
        { name: 'Limonata', price: '160 ₺' },
        { name: 'Portakal Suyu', price: '180 ₺' }
      ]
    }
  ]

  const [active, setActive] = useState(categories[0].id)

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Jiraf Menü</h1>
      <div className='flex gap-2 mb-4 justify-center flex-wrap'>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={\`px-3 py-1 rounded-full border \${active === cat.id ? 'bg-black text-white' : ''}\`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {categories.map((cat) =>
        active === cat.id ? (
          <div key={cat.id}>
            <motion.img
              src={cat.image}
              alt={cat.title}
              className='w-full h-40 object-cover rounded-2xl mb-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            {cat.items.map((item, idx) => (
              <div key={idx} className='flex justify-between border-b py-2'>
                <span>{item.name}</span>
                <span className='font-semibold'>{item.price}</span>
              </div>
            ))}
          </div>
        ) : null
      )}
    </div>
  )
}
