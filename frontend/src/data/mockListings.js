export const FOOD_TYPES = [
  { emoji: "🍞", label: "Bread" },
  { emoji: "🥗", label: "Meals" },
  { emoji: "🥦", label: "Produce" },
  { emoji: "🍰", label: "Baked" },
  { emoji: "🥫", label: "Packaged" },
  { emoji: "🍳", label: "Cooked" },
  { emoji: "🧃", label: "Drinks" },
  { emoji: "🎁", label: "Mixed" },
];

export const INITIAL_LISTINGS = [
  { id: 1, emoji: "🍞", title: "Fresh sourdough loaves", description: "3 unsold sourdough loaves from today's bake. Still warm. Whole wheat and plain.", type: "Bread", quantity: "3 loaves", location: "Salt Lake Bakery, Gariahat", distance: "0.4 km", expiresAt: Date.now() + 2 * 3600 * 1000, status: "active", poster: { name: "Salt Lake Bakery", initials: "SB", trust: 4.9, posts: 38 } },
  { id: 2, emoji: "🥗", title: "Catered lunch — assorted", description: "Office lunch leftovers — biryani, dal, salad, roti. Enough for 8–10 people. Freshly made this morning.", type: "Meals", quantity: "For 8–10", location: "Tech Hub, Sector V", distance: "1.1 km", expiresAt: Date.now() + 3 * 3600 * 1000, status: "active", poster: { name: "Riya Sharma", initials: "RS", trust: 4.7, posts: 12 } },
  { id: 3, emoji: "🥦", title: "Mixed vegetables", description: "Going on a week-long trip tomorrow. Have tomatoes, spinach, capsicum, and bottle gourd. Please take all.", type: "Produce", quantity: "~2 kg", location: "Naktala, South Kolkata", distance: "2.3 km", expiresAt: Date.now() + 18 * 3600 * 1000, status: "active", poster: { name: "Ananya Das", initials: "AD", trust: 4.5, posts: 6 } },
  { id: 4, emoji: "🍰", title: "Assorted pastries", description: "End-of-day pastries — eclairs, puffs, and cream rolls. Won't keep overnight.", type: "Baked", quantity: "12 pieces", location: "Flury's, Park Street", distance: "3.0 km", expiresAt: Date.now() + 45 * 60 * 1000, status: "active", poster: { name: "Flury's Cafe", initials: "FC", trust: 4.8, posts: 55 } },
  { id: 5, emoji: "🍳", title: "Home-cooked dal and rice", description: "Made extra today — 1 kg rice and a pot of moong dal. Still hot. Come soon!", type: "Cooked", quantity: "2–3 portions", location: "Tollygunge, Kolkata", distance: "4.2 km", expiresAt: Date.now() + 1.5 * 3600 * 1000, status: "claimed", poster: { name: "Meera Banerjee", initials: "MB", trust: 4.6, posts: 9 } },
];