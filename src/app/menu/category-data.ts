import { CategoryType } from './category-type';

export class CategoryData {

    public static chefsSpecialRolls: Array<Object> = [
        {id: 1, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Angry Dragon', description: 'shrimp tempura, cocumber & eel, topped with slices of avocado, mango & tobiko', price: 17},
        {id: 2, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Autumn of New York', description: 'spicy king salmon, avocado inside, topped with slices of king salmon & caviar', price: 17},
        {id: 3, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Blue Heaven', description: 'tuna, king salmon & yellowtail topped with slices of avocado', price: 17},
        {id: 4, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Brave Heart', description: 'spicy yellowtail, cucumber, shrimp tempura inside, topped with tuna & avocado', price: 17},
        {id: 5, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Buddha & Zen', description: 'spicy tuna, spicy lobster, avocado inside, topped with slices of yellowtail & scallion', price: 17},
        {id: 6, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Crazy Weekend', description: 'spicy lobster, shrimp tempura & avocado inside, topped with spicy tuna', price: 17},
        {id: 7, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Fallen Angel', description: 'spicy tuna & spicy yellowtail inside, topped with yellowtail, king salmon, tuna & avocado', price: 17},
        {id: 8, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Invictus', description: 'spicy lobster, shrimp tempura, cucumber inside, topped with slices of tuna, king salmon, yellowtail & salmon roe', price: 17},
        {id: 9, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Moon Walk', description: 'spicy tuna, cucumber, avocado, shrimp tempura roll, wrapped with soy bean seaweed', price: 17},
        {id: 10, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Spicy Bad Girl', description: 'spicy king salmon, spicy tuna, spicy yellowtail inside, topped with shrimp, avocado, jalapeno & tobiko', price: 17},
        {id: 11, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Clown', description: 'shrimp, kani, avocado topped with tuna, king salmon, yellow tail & caviar', price: 17},
        {id: 12, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Heart Stealer', description: 'king salmon, yellowtail & avocado inside, topped with spicy tuna & tempura flakes', price: 17},
        {id: 13, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Kite Runner', description: 'spicy kani, shrimp tempura, avocado topped with slices of king salmon & yellowtail', price: 17},
        {id: 14, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Old Man and The Sea', description: 'shrimp tempura, avocado, cucumber inside topped with slices of tuna', price: 17},
        {id: 15, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Alligator', description: 'shrimp tempura, mango, cream cheese, cucumber, avocado, topped with eel', price: 17},
        {id: 16, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'King of Rock', description: 'spicy tuna, spicy king salmon, spicy yellowtail, shrimp tempura, avocado inside, wrapped with isonoyuki-kombu paper', price: 17},
        {id: 17, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Summer of Hoboken', description: 'spicy tuna, spicy king salmon, tempura falkes inside, wrapped with sliced avocado & rice paper(no rice)', price: 17},
        {id: 18, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sunset Boulevard', description: 'steamed lobster, avocado, cucumber topped with mango, caviar & spicy sauce', price: 17},
        {id: 19, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sweet Heart', description: 'spicy tuna & tempura flakes rolled with soy bean seaweed & tuna on top', price: 17},
        {id: 20, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Last Tango in Paris', description: 'shrimp tempura, sspicy king salmon inside, topped with steamed lobster', price: 17},
        {id: 21, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Iron Lady', description: 'chilean seabass tempura, spicy lobster, cucumber inside, topped with spicy scallop', price: 17},
        {id: 22, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sleepless in Seattle', description: 'spicy yellowtail, shrimp tempura, avocado, jalapeno inside, topped with blue fin toro or tuna', price: 17},
        {id: 23, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sakura "N" Hanami', description: 'spicy tuna, spicy lobster, shrimp tempura, sweet mango & avocado, wrapped in soy bean nori', price: 17},
        {id: 24, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Rock of Love', description: 'spicy tuna, soft shell crab tempura, avocado topped with tuna, king salmon, yellowtail & red tobiko', price: 17}
    ]
    
    public static soup: Array<Object> = [
        {id: 1, categoryType: CategoryType.SOUP, name: 'Miso Soup', description: '', price: 2.5},
        {id: 1, categoryType: CategoryType.SOUP, name: 'Clear', description: '', price: 3},
        {id: 1, categoryType: CategoryType.SOUP, name: 'Mushroom Soba Soup', description: '', price: 7},
        {id: 1, categoryType: CategoryType.SOUP, name: 'Chicken Vegetable Soup', description: '', price: 7},
        {id: 1, categoryType: CategoryType.SOUP, name: 'Seafood Kimchee Soup', description: '', price: 10}
    ]

    public static salad: Array<Object> = [
        {id: 1, categoryType: CategoryType.SALAD, name: 'Fresh Garden Salad', description: 'with ginger beat dressing', price: 4},
        {id: 1, categoryType: CategoryType.SALAD, name: 'Kani Salad', description: 'with mayonnaise', price: 6},
        {id: 1, categoryType: CategoryType.SALAD, name: 'Avocado Salad', description: '', price: 6},
        {id: 1, categoryType: CategoryType.SALAD, name: 'Seaweed Salad', description: '', price: 6},
        {id: 1, categoryType: CategoryType.SALAD, name: 'Salmon Skin Salad', description: '', price: 7}
    ]

    public static hotAppetizer: Array<Object> = [
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Edamame', description: '', price: 5},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Smoked Edamame', description: '', price: 6},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Nasu Miso', description: 'broiled Japanese eggplant', price: 5},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Homemade Kimchee', description: '', price: 5},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Vegetable Spring Roll', description: '3 pcs. with plum mayonnaise', price: 5},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Shumai', description: 'steamed shrimp dumpling', price: 6},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Yasai Gyoza', description: 'steamed vegetable dumpling', price: 6},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Gyoza', description: 'pan fried pork dumpling', price: 6},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Shrimp & Vegetable Tempura', description: 'with shrimp & seasonal vegetable', price: 11},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'White Fish or Chicken Katsu', description: 'with fruit tonkatsu sauce', price: 11},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Soft Shell Crab Appetizer', description: 'with avocado, cucumber, tobiko & miso vinaigrette', price: 12},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Grilled Squid', description: 'with spicy ginger sauce', price: 12},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Grilled Shrimp', description: 'served with avocado salsa', price: 12},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Grilled Sea Scallops', description: 'served with onion, shitake mushroom & spicy sauce', price: 12},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Rock Shrimp', description: 'tempura shrimp in plum spice', price: 13},
        {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: 'Miso Black Cod', description: 'broiled and dizzled with yuzu miso vinaigrette', price: 16}
    ]

    public static coldAppetizer: Array<Object> = [
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Sushi Appetizer', description: '5 pcs. sushi of chef\'s selection', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Sashimi Appetizer', description: '12 pcs. sashimi of chef\'s selection', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Tuna or King Salmon Tataki', description: 'with scallion yuzu sauce', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Spicy Tuna Tartare', description: '', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Yellowtail Jalapeno', description: 'with jalapeno drizzled in yuzu soy', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Rainbow Naruto', description: 'tuna, king salmon, yellowtail & avocado wrapped with cucumber, tobiko on top', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Live Scallop', description: 'with ponzu sauce', price: 15},
        {id: 1, categoryType: CategoryType.COLD_APPETIZER, name: 'Kumamoto Oyster', description: '5 pcs. with scallion & yuzu sauce', price: 15},
    ]

    public static kitchenEntree: Array<Object> = [
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Teriyaki Tofu', description: '', price: 14},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Teriyaki Chicken', description: '', price: 15},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Teriyaki Eel', description: '', price: 19},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Teriyaki Beef', description: '', price: 19},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Teriyaki King Salmon', description: '', price: 19},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Teriyaki Shrimp', description: '', price: 19},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Chicken Hibachi', description: 'sauteed with seasonal vegetables', price: 16},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Beef Hibachi', description: 'sauteed with seasonal vegetables', price: 20},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Shrimp Hibachi', description: 'sauteed with seasonal vegetables', price: 20},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Tempura', description: 'served battered with 4 pcs. shrimp & 9 pcs. of seasonal vegetables', price: 19},
        {id: 1, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Miso Alaska Black Cod', description: 'broiled & drizzled with yuzu miso vinaigrette', price: 29},
    ]

    public static friedRiceAndNoodles: Array<Object> = [
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Vegetable Fried Rice', description: '', price: 10},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Chicken Fried Rice', description: '', price: 11},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Beef Fried Rice', description: '', price: 11},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Shrimp Fried Rice', description: '', price: 11},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Scallop Fried Rice', description: '', price: 11},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Lobster Fried Rice', description: '', price: 16},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'King Crab Fried Rice', description: '', price: 18},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Beef Yakiniku Don', description: 'sliced BBQ beef over rice, served with yakiniku sauce', price: 16},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Sauteed Mushroom Manoni Taro Noodles', description: 'with fresh assorted mushroom & vegetables', price: 14.5},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Stir Fried Chicken Or Seafood Udon/Soba', description: 'with chicken or seafood & vegetables', price: 13.5},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Inaniwa Udon', description: 'with seasonal vegetables in hot broth', price: 14},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Tempura Udon/Soba', description: 'in konbudashi Japanese clear broth, served with shrimp & vegetable tempura', price: 15},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Char Siu Ramen', description: 'with Char Siu, fish cake, egg, scallion in homemade pork & chicken bone broth', price: 13},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Shrimp Ramen', description: 'with shrimp, fish cake, egg, scallion in homemade pork & chicken bone broth', price: 16},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'Spider Ramen', description: 'with fried jumbo soft shell crab, egg, fish cake, scallion in homemade pork & chicken bone broth', price: 16},
        {id: 1, categoryType: CategoryType.FRIED_RICE_AND_NOODLES, name: 'King Crab Leg Ramen', description: 'with grilled jumbo king crab leg, fish cake, egg, scallion in homemade pork & chicken bone broth', price: 18}
    ]

    public static sushiBarEntree: Array<Object> = [
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'California Roll Entree', description: '3 rolls of California', price: 15},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Maki Combo', description: 'shrimp tempura, California & spicy tuna rolls', price: 17},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Tempura Maki Combo', description: 'shrimp, soft shell crab & spicy seafood tempura rolls', price: 18},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Tricolor Rolls Medley', description: 'tuna roll, king salmon roll & yellowtail roll combination', price: 16},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Spicy Rolls Medley', description: 'spicy tuna, spicy king salmon & spicy yellowtail roll', price: 18},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Four Color Sushi', description: '2 pcs. each of tuna, king salmon, yellowtail & eel sushi', price: 22},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Tricolor Sushi Deluxe', description: '3 pcs. each of tuna, king salmon, yellowtail sushi with 1 spicy tuna roll', price: 27},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Tricolor Sashimi Deluxe', description: '7 pcs. tuna, 7 pcs. king salmon, 7 pcs. yellowtail', price: 27},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Chirashi', description: '20 pcs. sashimi over sushi rice', price: 23},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Tuna Don', description: '20 pcs. tuna sashimi over sushi rice', price: 26},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'King Salmon Don', description: '20 pcs. king salmon over sushi rice', price: 26},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sushi Regular', description: '7 pcs. sushi & 1 king salmon roll', price: 21},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sushi Deluxe', description: '9 pcs. sushi & 1 king salmon roll', price: 24},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sashimi Regular', description: '18 pcs. assorted sashimi of chef\' selection', price: 22},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sashimi Deluxe', description: '23 pcs. assorted sashimi of chef\' selection', price: 28},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sushi & Sashimi Combo For 1', description: '10 pcs. sashimi, 6 pcs. sushi & 1 spicy tuna avocado roll', price: 35},
        {id: 1, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sushi & Sashimi Combo For 2', description: '20 pcs. saashimi, 10 pcs. sushi, 1 tuna roll & 1 king salmon roll', price: 70}
    ]

    public static illuzionTodaysSpecial: Array<Object> = [
        {id: 1, categoryType: CategoryType.ILLUZION_TODAYS_SPECIAL, name: 'Sushi', description: '10 pcs', price: 40},
        {id: 1, categoryType: CategoryType.ILLUZION_TODAYS_SPECIAL, name: 'Sashimi', description: '20 pcs', price: 50},
        {id: 1, categoryType: CategoryType.ILLUZION_TODAYS_SPECIAL, name: 'Sushi & Sashimi', description: '10 pcs. sushi & 20 pcs. sashimi', price: 80}
    ]



    public static categories: Array<Object> = [
        {id: 1, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Chef\'s Special Rolls', description: '', products: CategoryData.chefsSpecialRolls},
        {id: 2, categoryType: CategoryType.SOUP, name: 'Soup', description: '', products: CategoryData.soup},
        {id: 3, categoryType: CategoryType.SALAD, name: 'Salad', description: '', products: CategoryData.salad},
        {id: 4, categoryType: CategoryType.HOT_APPETIZER, name: 'Hot Appetizer', description: '', products: CategoryData.hotAppetizer},
        {id: 5, categoryType: CategoryType.COLD_APPETIZER, name: 'Cold Appetizer', description: '', products: CategoryData.coldAppetizer},
        {id: 6, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Kitchen Entree', description: 'Served with Miso Soup or Salad', products: CategoryData.kitchenEntree},
        {id: 7, categoryType: CategoryType.KITCHEN_ENTREE, name: 'Fried Rice & Noodles', description: 'Served with Miso Soup or Salad', products: CategoryData.friedRiceAndNoodles},
        {id: 7, categoryType: CategoryType.SUSHI_BAR_ENTREE, name: 'Sushi Bar Entree', description: 'Served with Miso Soup or Salad', products: CategoryData.sushiBarEntree},
        {id: 8, categoryType: CategoryType.ILLUZION_TODAYS_SPECIAL, name: 'Illuzion Today\'s Special', description: 'Chef\'s special tasting platter, fresh Japanese seafood air shipped from Tokyo Tsukiji Market', products: CategoryData.illuzionTodaysSpecial}
    ];
}