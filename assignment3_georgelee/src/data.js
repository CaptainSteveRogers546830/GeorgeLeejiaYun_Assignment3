const RAW = [
  { id: 1, name: 'Odin', species: 'Dog', breed: 'German Shepherd', age: '3 years', sex: '♂', emoji: '🐕', tags: ['Loyal', 'Smart', 'Needs a yard'], bio: 'Odin is a loyal, clever shepherd who thrives with a job to do and a big yard to patrol.' },
  { id: 2, name: 'Garfield', species: 'Cat', breed: 'Tabby', age: '4 years', sex: '♂', emoji: '🐈', tags: ['Relaxed', 'Food lover', 'Indoor'], bio: 'Garfield is a relaxed tabby with a legendary appetite and a talent for finding the warmest spot in the house.' },
  { id: 3, name: 'Buddah', species: 'Dog', breed: 'Border Collie', age: '2 years', sex: '♂', emoji: '🐶', tags: ['Energetic', 'Quick learner', 'Active family'], bio: 'Buddah is a quick-witted collie who loves games, training and long runs with an active family.' },
  { id: 4, name: 'Arlene', species: 'Cat', breed: 'Turkish Angora', age: '2 years', sex: '♀', emoji: '🐱', tags: ['Graceful', 'Affectionate', 'Quiet home'], bio: 'Arlene is an elegant, affectionate Angora who prefers quiet homes and gentle company.' },
  { id: 5, name: 'Nux', species: 'Dog', breed: 'Labrador Retriever', age: '1 year', sex: '♂', emoji: '🦮', tags: ['Friendly', 'Playful', 'Good with kids'], bio: 'Nux is a friendly young Lab who adores kids, fetch and anyone holding a snack.' },
  { id: 6, name: 'Nermal', species: 'Cat', breed: 'Russian Blue', age: '6 months', sex: '♂', emoji: '😺', tags: ['Kitten', 'Curious', 'Gentle'], bio: 'Nermal is a curious Russian Blue kitten with a soft voice and a gentle, playful streak.' },
  { id: 7, name: 'Bayard', species: 'Dog', breed: 'Bloodhound', age: '5 years', sex: '♂', emoji: '🐕', tags: ['Gentle', 'Great nose', 'Needs space'], bio: 'Bayard is a gentle old soul with a world-class nose who enjoys slow, sniffy walks.' },
  { id: 8, name: 'Furiosa', species: 'Cat', breed: 'Bengal', age: '2 years', sex: '♀', emoji: '🐈', tags: ['Athletic', 'Curious', 'Needs play'], bio: 'Furiosa is a sleek, athletic Bengal who needs climbing space and lots of play.' },
  { id: 9, name: 'Robert', species: 'Dog', breed: 'Bulldog', age: '4 years', sex: '♂', emoji: '🐶', tags: ['Calm', 'Cuddly', 'Low energy'], bio: 'Robert is a calm, cuddly bulldog who is happiest on the sofa, snoring beside you.' },
  { id: 10, name: 'Chessur', species: 'Cat', breed: 'British Shorthair', age: '3 years', sex: '♂', emoji: '🐱', tags: ['Easygoing', 'Quiet', 'Indoor'], bio: 'Chessur is an easygoing British Shorthair who enjoys quiet company and a comfy chair.' },
  { id: 11, name: 'Frank', species: 'Dog', breed: 'Pug', age: '3 years', sex: '♂', emoji: '🐶', tags: ['Funny', 'Cuddly', 'Low energy'], bio: 'Frank is a snorty, sofa-loving pug who thinks every lap was made for him.' },
  { id: 12, name: 'Chop', species: 'Dog', breed: 'Rottweiler', age: '4 years', sex: '♂', emoji: '🐕', tags: ['Loyal', 'Strong', 'Needs training'], bio: 'Chop is a big softie with a protective streak who thrives with a confident, patient owner.' },
  { id: 13, name: 'Mojo', species: 'Dog', breed: 'Chihuahua', age: '2 years', sex: '♂', emoji: '🐕', tags: ['Tiny', 'Feisty', 'Small home'], bio: 'Mojo is a pocket-sized chihuahua with a huge personality and a love of warm blankets.' },
  { id: 14, name: 'Romeo', species: 'Cat', breed: 'Siamese', age: '3 years', sex: '♂', emoji: '😺', tags: ['Vocal', 'Affectionate', 'Needs company'], bio: 'Romeo is a chatty Siamese who follows you from room to room and loves to talk.' },
  { id: 15, name: 'Dastan', species: 'Cat', breed: 'Persian', age: '4 years', sex: '♂', emoji: '🐱', tags: ['Calm', 'Fluffy', 'Needs grooming'], bio: 'Dastan is a regal Persian who enjoys a quiet home and a daily brush.' },
  { id: 16, name: 'Alex', species: 'Cat', breed: 'Scottish Fold', age: '1 year', sex: '♂', emoji: '🐈', tags: ['Playful', 'Sweet', 'Good with kids'], bio: 'Alex is a sweet, curious Scottish Fold with folded ears and endless energy.' },
];
// Photo path is built from the pet's name, e.g. public/pets/odin.jpg
export const PETS = RAW.map(p => ({ ...p, img: `pets/${p.name.toLowerCase()}.jpg` }));
export const TIPS = [
  ['Give them a quiet corner', 'A bed, water and a hiding spot let a new pet decompress.'],
  ['Keep routines predictable', 'Feed and walk at the same times so the first week feels safe.'],
  ['Let trust grow at their pace', 'Offer treats and calm company; never force cuddles.'],
  ['Book a vet check early', 'Vaccinations and a health check in the first two weeks.'],
];
export const STORIES = [
  { name: 'Jamie & Priya', text: 'We thought we were adopting a dog. In the end, Nux adopted our whole family.' },
  { name: 'Daniel Tan', text: 'Garfield spent his first week hiding under the sofa. Now he rules the house and every warm lap in it.' },
  { name: 'Aisha R.', text: 'The team interviewed us patiently and matched us with Arlene. It felt like a conversation, not a transaction.' },
  { name: 'Wei Jie', text: 'I had to move overseas and could not keep my dog. Pet Heaven cared for him so well that I could leave with a clear heart.' },
];
