/* 4C — College Hill menus. Verified against the March 2025 boards,
   the June 2026 deli-counter post and the July 2026 Family Meal Deal. */
const SHOT = {
 "Smashed Avocado":"dish-smashed-avocado.jpg",
 "Waffles":"dish-waffles.jpg",
 "Kinder Delight":"dish-kinder-pancakes.jpg",
 "Chicken Stack":"dish-chicken-stack.jpg",
 "Creamy Chicken Stack":"dish-creamy-chicken-stack.jpg",
 "Crispy Chicken Sriracha":"dish-sriracha.jpg",
 "4C Chicken Sandwich":"dish-chicken-sandwich.jpg",
 "Oriental Roast Salmon":"dish-salmon.jpg",
 "4C Spicy Fries":"dish-spicy-fries.jpg",
 "The Beefy Bater":"dish-angus-burger.jpg",
 "4C Smashed Angus Beef Burger":"dish-angus-burger.jpg",
 "Corrs Club":"sandwich-made-to-order.jpg",
 "Cappuccino":"hot-chocolate-cappuccino.jpg",
 "Single Espresso":"coffee-beans.jpg"
};
const MENUS = {
 breakfast:{label:"Breakfast",served:"Served 8:00am \u2013 3:30pm",
  foot:"Meat-for-meat substitution only. Alternative milks +95p.",
  courses:[
   {name:"Fries",note:"You know what \u2014 I can eat a salad at lunch.",items:[
    ["Full Fry","Sausage, bacon, soda and potato bread, hash brown, tomato, mushrooms, baked beans and eggs cooked how you like them.","\u00a313.95"],
    ["4C House Fry","Sausage, bacon, soda and potato bread, hash brown, tomato, eggs your way, beans and toast.","\u00a310.95"],
    ["4C Special Lean Fry","Sourdough, two turkey rashers, tomato, scrambled eggs and beans.","\u00a38.95"],
    ["Breakfast Bagel or Bap","Sausage, bacon, hash brown and fried egg.","\u00a39.95"],
    ["Omelette","Choose three from chicken, bacon, peppers, onion, mushroom and cheese.","\u00a311.95","Gluten free \u00b7 Vegan"]]},
   {name:"Pancakes",note:"",items:[
    ["Sweet Bacon","Bacon, seasonal fruit, maple syrup and cream.","\u00a310.95"],
    ["Kinder Delight","Kinder sauce, roasted hazelnut, Kinder Bueno and white chocolate.","\u00a310.95"],
    ["Crunchy Biscoff","Biscoff spread, crushed Biscoff, white chocolate and seasonal fruit.","\u00a310.95"],
    ["Protein Kick","Peanut butter, seasonal fruits and honey.","\u00a310.95"]]},
   {name:"From the griddle",note:"",items:[
    ["Eggs Benedict","Poached eggs and crispy ham with hollandaise on toasted sourdough.","\u00a311.95","Gluten free"],
    ["Smashed Avocado","Poached eggs, grilled halloumi, fresh chilli, spring onion and balsamic on toasted sourdough.","\u00a311.95","Gluten free \u00b7 Vegan"],
    ["French Toast","Thick-cut brioche, cinnamon sugar, streaky bacon, seasonal fruit and maple syrup.","\u00a311.95","Gluten free \u00b7 Vegan"],
    ["Brie &amp; Berry Toast","Grilled brie, seasonal berries, pomegranate, orange and honey on sourdough.","\u00a39.95","Gluten free"],
    ["Smoked Salmon Bagel","Smoked salmon, cream cheese, red onion, dill, cucumber and capers on toasted sourdough.","\u00a312.95"]]},
   {name:"Lighter",note:"",items:[
    ["Simply Porridge","Granola, seasonal fruit, almond flakes, chocolate and honey. Protein option +\u00a32.00.","\u00a37.95"],
    ["Waffles","Fresh waffles with seasonal fruit, cream and maple syrup.","\u00a37.95"],
    ["Granola &amp; Yoghurt","Natural yoghurt, seasonal fruit, crunchy granola, honey and strawberry coulis.","\u00a38.95","Gluten free \u00b7 Vegan"],
    ["4C A\u00e7a\u00ed Bowl","Granola, chia seeds, seasonal fruit and honey. Protein option +\u00a32.00.","\u00a38.95","Gluten free \u00b7 Vegan"]]},
   {name:"Extras",note:"",items:[
    ["Smoked Salmon","","\u00a34.80"],["Two Bacon","","\u00a32.95"],["Two Sausages","","\u00a32.95"]]}]},
 familydeal:{label:"Family Meal Deal",served:"Friday &amp; Saturday, 4:00pm \u2013 7:00pm",
  foot:"Any 2 adult meals plus any 2 kids' meals for \u00a340. No menu maths required.",
  courses:[
   {name:"Adult meals",note:"Choose any two.",items:[
    ["Lasagne","Chips and side salad.","included"],
    ["Chicken Stack","Pan-fried or southern-fried chicken.","included"],
    ["Signature Deluxe Burger","Mayo, rocket, tomato, bacon, cheese and onion rings.","included"],
    ["Signature Chicken Goujons","Chips, salad and coleslaw.","included"],
    ["Angus Beef Burger","Sweet dill mayo, gherkins, rocket, streaky bacon, cheese and crispy onions.","included"],
    ["Chicken Curry &amp; Loaded Fries","","included"],
    ["Beef &amp; Bird","","included"],
    ["Goat's Cheese Tartlets","On a bed of mixed salad with balsamic glaze.","included"],
    ["Cod Goujons","Chips, salad and tartare sauce.","included"],
    ["Caesar Salad","","included"],
    ["Spicy Goujon Wrap, BLT or House Tuna","","included"]]},
   {name:"Kids' meals",note:"Choose any two.",items:[
    ["Chicken Stack","","included"],["Chicken Curry","","included"],
    ["Chicken Goujons","","included"],["Pizza Slice","Pepperoni or cheese.","included"],
    ["Sausage, Chips &amp; Beans","","included"],["Burger","","included"]]}]},
 lunch:{label:"Lunch",served:"Served 12:00pm \u2013 3:30pm",
  foot:"Sandwiches on white, granary or sourdough. Toasted or fresh, served with garnish. Gluten free bread available.",
  courses:[
   {name:"Soup &amp; salads",note:"",items:[
    ["Soup of the Day","Served with a wheaten scone and real butter.","\u00a37.50"],
    ["Caesar Salad or Wrap","Crispy chicken, bacon, mixed leaves, sun-dried tomatoes, croutons and parmesan.","\u00a311.95","Gluten free"],
    ["The G.O.A.T","Fivemiletown goats cheese, mixed leaves, beetroot, walnut, peach, honey and balsamic.","\u00a311.95","Gluten free"]]},
   {name:"Sandwiches",note:"",items:[
    ["4C House Tuna","Tuna chunks, red onion, sweetcorn and mayo.","\u00a311.95"],
    ["4C Ham &amp; Cheese","Irish ham, red onion marmalade and cheddar.","\u00a311.95"],
    ["Corrs Club","Chicken breast, bacon, lettuce and coleslaw.","\u00a311.95"],
    ["B.L.T","Crispy bacon, tomato, lettuce and mayo.","\u00a311.95"],
    ["Spicy Goujon Wrap","Chicken goujons, sweet chilli, tomato salsa and cheddar.","\u00a311.95"],
    ["Chicken &amp; Bacon Melt","Sweet chilli mayo and grated cheese in toasted ciabatta, side salad and coleslaw.","\u00a311.95"],
    ["Tuna &amp; Cheese Melt","Mayo, red onion and melted cheese in toasted ciabatta.","\u00a311.95"]]},
   {name:"Mains",note:"",items:[
    ["Chicken Curry","Fragrant rice and a mini garlic and coriander naan.","\u00a314.95"],
    ["Honey Chilli Chicken","Shredded chicken in honey chilli sauce with rice, chips, or half and half.","\u00a314.95"],
    ["4C Beef &amp; Bird Bagel","Grilled chicken topped with BBQ beef and melted cheese on a toasted bagel, rocket, BBQ dip and fries.","\u00a314.95"],
    ["4C Zinger Bagel","Southern fried chicken, melted cheese, bacon and taco sauce on a toasted bagel with rocket and fries.","\u00a314.95"],
    ["4C Smashed Angus Beef Burger","Melted cheese, crispy bacon, tobacco onions, gherkin and 4C spicy sauce in a brioche bun, coleslaw and fries.","\u00a314.95"],
    ["Chicken Deluxe Burger","Southern fried chicken, cheese, crispy bacon, lettuce, tomato and mayo in a brioche bun with coleslaw and fries.","\u00a314.95"],
    ["Chicken Stack","Pan-fried chicken on creamy champ with seasoned greens, tobacco onions and peppered sauce.","\u00a314.95"],
    ["Goujons &amp; Chips","Homemade breaded goujons with French or sweet potato fries.","\u00a311.95"]]},
   {name:"Loaded fries",note:"",items:[
    ["Bacon Fries","Melted cheese and crispy bacon bits smothered in garlic butter.","\u00a312.95"],
    ["4C Spicy Fries","Crispy chicken, cheddar, jalape\u00f1os and 4C spicy sauce.","\u00a312.95"],
    ["Peppered Fries","Crispy chicken, cheddar, tobacco onions and peppered sauce.","\u00a312.95"]]},
   {name:"Sides",note:"",items:[
    ["French Fries","","\u00a33.45"],["Sweet Potato Fries","","\u00a33.95"]]}]},
 afterschool:{label:"After school",served:"Served Monday \u2013 Thursday, 3:30pm \u2013 5:00pm",
  foot:"Please inform our staff of any allergies or dietary requirements.",
  courses:[
   {name:"Wraps &amp; melts",note:"",items:[
    ["Spicy Goujon Wrap","Chicken goujons, sweet chilli, tomato salsa and cheese.","\u00a311.95"],
    ["Chicken &amp; Bacon Melt","Chicken, bacon, sweet chilli mayo and cheese in a toasted ciabatta, side salad and coleslaw.","\u00a311.95"],
    ["Goujons &amp; Chips","Homemade breaded goujons with French or sweet potato fries.","\u00a311.95"]]},
   {name:"Mains",note:"",items:[
    ["Soup of the Day","Served with a wheaten scone.","\u00a37.50"],
    ["Honey Chilli Chicken","Shredded chicken in honey chilli sauce with rice, chips, or both.","\u00a314.95"],
    ["Chicken Curry","Served with rice or chips, or both.","\u00a314.95"],
    ["4C Smashed Angus Burger","Melted cheese, crispy bacon, tobacco onions and gherkins, topped with 4C spicy sauce, coleslaw and fries.","\u00a314.95"],
    ["Chicken Deluxe Burger","Southern fried chicken, melted cheese, crispy bacon, lettuce, tomato and mayo, coleslaw and fries.","\u00a314.95"]]},
   {name:"Loaded fries",note:"",items:[
    ["Bacon Fries","Melted cheese and crispy bacon bits smothered in garlic butter.","\u00a312.95"],
    ["4C Spicy Fries","Crispy chicken, melted cheese, jalape\u00f1os and 4C spicy sauce.","\u00a312.95"],
    ["Peppered Fries","Crispy chicken, cheddar, tobacco onions and peppered sauce.","\u00a312.95"]]},
   {name:"Pancakes",note:"",items:[
    ["Sweet Bacon","Bacon, seasonal fruits, maple syrup and cream.","\u00a310.95"],
    ["Kinder Delight","Kinder sauce, roasted hazelnuts, Kinder Bueno and white chocolate.","\u00a310.95"],
    ["Crunchy Biscoff","Biscoff spread, crushed Biscoff, white chocolate and seasonal fruits.","\u00a310.95"],
    ["Protein Kick","Peanut butter, seasonal fruits and honey.","\u00a310.95"]]}]},
 nitebites:{label:"Nite Bites",served:"Friday &amp; Saturday, 4:30pm \u2013 8:00pm",
  foot:"Last food order 8:00pm. Bring your own bottle \u2014 small corkage per bottle.",
  courses:[
   {name:"Starters",note:"",items:[
    ["Homemade Soup of the Day","","\u00a38.00"],
    ["4C BBQ Chicken Wings","Sizzling mini barbecue chicken wings.","\u00a39.50"],
    ["Crispy Maple Chicken","On a warm spinach wrap with rocket and a curry mayo drizzle.","\u00a39.50"],
    ["Classic Brioche","Our garlic and mozzarella mini-loaf.","\u00a39.50"],
    ["Garlic &amp; Chilli Prawns","King prawns on lime avocado pur\u00e9e and toasted sourdough with chilli oil.","\u00a311.95"]]},
   {name:"Mains",note:"",items:[
    ["4C Black Angus Sirloin","8oz sirloin with seasonal greens, creamy champ, pepper sauce, French fried onions, mushrooms and grilled tomato.","\u00a324.95"],
    ["Oriental Roast Salmon","Sweet chilli and sesame, on stir-fried vegetables and rice noodles.","\u00a320.50"],
    ["The Beefy Bater","Two 4oz smashed beef burgers on toasted brioche with lettuce, beef tomato, crispy onions, smoked cheese and bacon, house fries and pepper dip.","\u00a318.50"],
    ["4C Chicken Sandwich","Pan-fried or southern fried chicken with crispy bacon, smoked cheese, coleslaw, honey drizzle and crispy onions, with house fries.","\u00a318.50"],
    ["Tortellini Granto Tellone","Spinach and ricotta tortellini in tomato, basil, torn spinach and parmesan with a garlic slice.","\u00a317.50","Vegan"],
    ["Thai Green Curry","Lime-scented rice and warmed naan, with chicken or vegetable.","\u00a317.50","Gluten free"],
    ["Creamy Chicken Stack","Pan-fried chicken on creamy champ with seasonal greens, tobacco onions and peppered sauce.","\u00a317.50"],
    ["Crispy Chicken Sriracha","Crispy chicken strips on warm flatbread with rocket, pickled red onion, sriracha and house fries.","\u00a317.50"],
    ["The Spice Bowl","Crispy chicken with saut\u00e9ed peppers and onion, chef's seasoning and house fries.","\u00a316.95"],
    ["4C Savoury Tarts","Red onion and goats cheese tartlets with house salad and sweet potato fries.","\u00a316.00"]]}]},
 drinks:{label:"Drinks",served:"Served daily 8:30am \u2013 8:00pm \u00b7 weekends 8:30am \u2013 5:00pm",
  foot:"Alternative milks +95p.",
  courses:[
   {name:"Coffee",note:"Customisable to your taste.",items:[
    ["Single Espresso","","\u00a32.60"],["Double Espresso","","\u00a33.00"],
    ["Americano","Espresso let down with hot water.","\u00a33.20"],
    ["Latte","Espresso and steamed milk.","\u00a33.25"],
    ["Cappuccino","Espresso, steamed milk and a layer of foam.","\u00a33.25"],
    ["Flat White","Microfoamed milk over a single or double shot.","\u00a33.25"],
    ["Caf\u00e9 au Lait","Brewed coffee and steamed milk, no foam.","\u00a33.25"],
    ["Chai Latte","Espresso and steamed milk infused with chai.","\u00a33.30"],
    ["Cortado","Espresso cut with an equal measure of warm milk.","\u00a33.30"],
    ["Macchiato","Espresso with a spoon of foamed milk.","\u00a33.40"],
    ["Mocha","Chocolate-flavoured latte.","\u00a33.80"],
    ["White Mocha","Espresso, white chocolate and milk.","\u00a33.80"]]},
   {name:"Hot drinks",note:"",items:[
    ["Hot Chocolate","","\u00a33.80"],
    ["White Hot Chocolate","Topped with cream, marshmallows and white chocolate chips.","\u00a33.80"],
    ["Breakfast Tea","","\u00a32.95"],
    ["Herbal Teas","Lemon and ginger, berry, peppermint, chamomile, Earl Grey or green.","\u00a32.95"]]},
   {name:"Iced",note:"",items:[
    ["Iced Latte","","\u00a33.95"],["Iced Americano","","\u00a33.95"],
    ["Iced Chai","Black tea with cinnamon and clove, milk and ice.","\u00a33.95"],
    ["Iced Mocha or White Mocha","Topped with sweetened whipped cream.","\u00a34.20"],
    ["Iced Matcha","","\u00a34.25"],
    ["Iced Lemonade","Cloudy, cherry, pineapple or strawberry.","\u00a33.95"],
    ["Iced Tea","Peach or lemon.","\u00a33.60"]]},
   {name:"Smoothies &amp; shakes",note:"Saves you a lap of the Mall.",items:[
    ["Tropic Like It's Hot","Passion fruit, mango and pineapple.","\u00a34.25"],
    ["Strawberry Blonde","Strawberry and banana.","\u00a34.25"],
    ["Oh Berry Well","Strawberry, blackberry and raspberry.","\u00a34.25"],
    ["Broc 'n' Roll","Broccoli, mango, banana, pineapple, spinach and cucumber.","\u00a34.25","Vegetarian"],
    ["Milkshakes","Strawberry, vanilla or banana.","\u00a34.95"],
    ["Peanut Butter &amp; Jelly","Peanut butter, full-fat milk, oats, honey, protein, banana and mixed berries.","\u00a35.95"],
    ["Strawberry Coconut","Strawberries, coconut milk, vanilla protein, honey and ground flax.","\u00a35.95"],
    ["Triple Berry","Mixed berries, banana, strawberry protein, almond milk and chia.","\u00a35.95"]]},
   {name:"From the fridge",note:"",items:[
    ["Still or Sparkling Water","","\u00a32.60"],
    ["Coke, Diet Coke or Coke Zero","","\u00a32.60"],
    ["Fanta Orange or Lemon","","\u00a32.60"],
    ["San Pellegrino Limonata or Aranciata","","\u00a32.50"],
    ["Pure Orange or Apple Juice","","\u00a31.75"]]}]}
};
const ORDER=["breakfast","lunch","afterschool","familydeal","nitebites","drinks"];
const tabsEl=document.querySelector(".tabs"),menuEl=document.getElementById("menu"),
 servedEl=document.getElementById("served"),footEl=document.getElementById("menufoot");
ORDER.forEach(function(key,i){var b=document.createElement("button");
 b.className="tab";b.type="button";b.setAttribute("role","tab");b.dataset.key=key;
 b.textContent=MENUS[key].label;b.setAttribute("aria-selected",i===0?"true":"false");
 b.addEventListener("click",function(){select(key);});tabsEl.appendChild(b);});
function shot(n){var k=SHOT[n]||SHOT[n.replace(/&amp;/g,"&")];
 return k?'<img class="dish__shot" loading="lazy" alt="" onerror="this.remove()" src="images/'+k+'">':"";}
function select(key){
 [].forEach.call(tabsEl.children,function(b){b.setAttribute("aria-selected",b.dataset.key===key?"true":"false");});
 var m=MENUS[key];servedEl.innerHTML=m.served;footEl.innerHTML=m.foot||"";
 menuEl.innerHTML=m.courses.map(function(c){return '<section class="course">'+
  '<span class="label label--dark">'+c.name+'</span>'+
  (c.note?'<p class="course__note">'+c.note+'</p>':"")+
  c.items.map(function(it){var name=it[0],desc=it[1],price=it[2],diet=it[3];
   return '<div class="dish">'+shot(name)+'<div class="dish__text"><div class="dish__top">'+
    '<span class="dish__name">'+name+'</span><span class="dish__lead"></span>'+
    '<span class="dish__price'+(price==="included"?" inc":"")+'">'+price+'</span></div>'+
    (desc?'<p class="dish__desc">'+desc+'</p>':"")+
    (diet?'<span class="dish__diet">'+diet+'</span>':"")+'</div></div>';}).join("")+
  '</section>';}).join("");}
select("breakfast");
