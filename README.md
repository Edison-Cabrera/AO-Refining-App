# AO-Refining-App
Albion Refining Calculator

### Welcome to my take on Albion Online Refining Calculator App

How does Albion Online do refining calculations?

First off, Albion Online relies on specs (specialization) of player.
Starting from Tier 4(t4) up to Tier 8(t8), you get specialization for each tier of materials when refining.
Specialization is like levels you grind in most mmos.
There is a minimum of 1 specs once you unlocked the tier and maximum of 100.

Each tier has 3 levels of enchantment:
x.1 = common
x.2 = rare
x.3 = exceptional

Aside from specs, refining needs "focus" as well. These are replenised every 3 days for a maximum of 30000 points.
There is a focus cost for each refining per tier of materials. And the more specs you have, the less focus points you need to refine said materials.

Each materials has a base cost per tier and enchantment.
You can see base cost per tier per enchantment in: [base cost](https://github.com/Edison-Cabrera/AO-Refining-App/blob/master/script.js)

Another value we need is the crafting bonus location. For this calculator, I removed the blackzone(bz) bonus in the constant variables. 
Crafting bonuses have two values, one for not using focus and another for using focus. Basically, there is an additional bonus if players are crafting with focus.
Crafting Bonus Location : [With Focus, Without Focus]
royalCityBonus: [.367, .539],
royalCityNoBonus: [.152, .435],
royalIslandBonus: [.285, .497],
royalIslandNoBonus: [0, .371]