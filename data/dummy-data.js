import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Quick & Easy', '#f54242'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c4', 'German', '#f5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Asian', '#b9ffb0'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c10', 'Summer', '#47fced')
];

export const MEALS = [
    new Meal(
        'm1',
        ['c1', 'c2'],
        'Spaghetti with Tomato Sauce',
        'affordable',
        'simple',
        'https://i-giadinh.vnecdn.net/2022/04/20/Buoc-9-9-3230-1650439557.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm2',
        ['c7', 'c9'],
        'Croissant',
        'affordable',
        'simple',
        'https://dreamsinparis.com/wp-content/uploads/2022/10/French-Breakfast-foods.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm3',
        ['c2', 'c3'],
        'Ala Carte',
        'affordable',
        'simple',
        'https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/1/5/15-burger-g_-n_ng_1.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm4',
        ['c2', 'c10'],
        'Milkshake',
        'affordable',
        'simple',
        'https://www.theepicureanmouse.com/wp-content/uploads/2022/05/strawberry-banana-milkshake-featured-pic.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm5',
        ['c5'],
        'Tequilla',
        'affordable',
        'simple',
        'https://www.foodandwine.com/thmb/ljF38kbAuE7097aZaNyqHHpHKpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tequlia-NOM-tout-FT-BLOG0723-24d2672b83c2454b810cab9da2b018e7.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm6',
        ['c6'],
        'Spicy chicken legs',
        'affordable',
        'simple',
        'https://www.willflyforfood.net/wp-content/uploads/2022/10/chicken-feet-weird-filipino-food.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm7',
        ['c4'],
        'Eisbein',
        'affordable',
        'simple',
        'https://lakegenevacountrymeats.com/wp-content/uploads/german-ham-hock-eisbein.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm8',
        ['c2', 'c5', 'c10'],
        'Vanilla ice cream',
        'affordable',
        'simple',
        'https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm9',
        ['c8'],
        'Salmon sushi',
        'affordable',
        'simple',
        'https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),

    new Meal(
        'm10',
        ['c5', 'c7', 'c8'],
        'Pho Bo',
        'affordable',
        'simple',
        'https://statics.vinpearl.com/pho-ha-noi-01_1677398952.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Onion',
            '1 Tablespoon of Olive Oil',
            '250g Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut the tomatoes and th onion into small pieces',
            'Boil some water',
            'Put the spaghetti into the boiling water',
            'Heaten up some olive oil',
            'Feel free to add some cheese'
        ],
        false,
        true,
        true,
        true
    ),
]