import './App.css';
import CardGrid from './components/CardGrid'

const cards = [
  { id: 1, title: 'Shoreline Village', description: 'Harborfront restaurants, shopping, and views of the Queen Mary.', image: 'https://images.pexels.com/photos/10733688/pexels-photo-10733688.jpeg', alt: 'Shoreline Village waterfront' },
  { id: 2, title: 'The Queen Mary', description: 'Historic ocean liner with tours, exhibits, and dining.', image: 'https://images.pexels.com/photos/37646996/pexels-photo-37646996.jpeg', alt: 'The Queen Mary ship exterior' },
  { id: 3, title: 'Aquarium of the Pacific', description: 'Large aquarium with sea life habitats and interactive exhibits.', image: 'https://images.pexels.com/photos/12829698/pexels-photo-12829698.jpeg', alt: 'Colorful fish in aquarium' },
  { id: 4, title: 'Belmont Shore', description: 'Beachfront neighborhood with cafes, shops, and a sandy shoreline.', image: 'https://images.pexels.com/photos/9716313/pexels-photo-9716313.jpeg', alt: 'People relaxing on Belmont Shore' },
  { id: 5, title: 'Naples Island', description: 'Canal-lined streets with gondola rides and waterfront homes.', image: 'https://images.pexels.com/photos/29018393/pexels-photo-29018393.jpeg', alt: 'Naples Island canals and houses' },
  { id: 6, title: 'Downtown Long Beach', description: 'Walkable downtown with galleries, dining, and nightlife.', image: 'https://images.pexels.com/photos/32816481/pexels-photo-32816481.jpeg', alt: 'Long Beach downtown street scene' },
  { id: 7, title: 'Earl Burns Miller Japanese Garden', description: 'Tranquil garden located on the CSULB campus.', image: 'https://images.pexels.com/photos/18257072/pexels-photo-18257072.jpeg', alt: 'Japanese garden ponds and trees' },
  { id: 8, title: 'Bixby Park', description: 'A popular park with lawn, playground, and waterfront access.', image: 'https://images.pexels.com/photos/30562548/pexels-photo-30562548.jpeg', alt: 'Green lawn and trees at Bixby Park' },
  { id: 9, title: 'Belmont Veterans Memorial Pier', description: 'Scenic walking pier with ocean views and fishing.', image: 'https://images.pexels.com/photos/34796847/pexels-photo-34796847.jpeg', alt: 'Belmont Pier at sunset' },
  { id: 10, title: 'Long Beach Museum of Art', description: 'Coastal museum with modern art and oceanfront grounds.', image: 'https://images.pexels.com/photos/26424630/pexels-photo-26424630.jpeg', alt: 'Art museum by the coast' },
]

const App = () => (
  <div className="App">
    <header className="hero-header">
      <h1>Places to Visit in Long Beach!</h1>
      <p>Cards with image previews and descriptions for multiple locations in Long Beach</p>
    </header>

    <CardGrid items={cards} />
  </div>
)

export default App