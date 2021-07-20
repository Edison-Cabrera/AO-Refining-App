# AO-Refining-App
## Albion Refining Calculator

### This is my take on Albion Online Refining Calculator App

How does Albion Online do refining calculations?

First off, Albion Online relies on specs (specialization) of player.
Starting from Tier 4(t4) up to Tier 8(t8), you get specialization for each tier of materials when refining.
Specialization is like levels you grind in most mmos.
There is a minimum of 1 specs once you unlocked the tier and maximum of 100.

Each tier has 3 levels of enchantment:
x.1 = common
x.2 = rare
x.3 = exceptional

Aside from specs, refining needs "focus" as well. These are replenised every 3 days for a maximum of 30000 points. Using Focus Points also adds crafting bonus per location. See [crafting bonus](#CBL).
There is a focus cost for each refining per tier of materials. And the more specs you have, the less focus points you need to refine said materials.

Each materials has a base cost per tier and enchantment.
You can see base cost per tier per enchantment in: [base cost](#./constVariables.js)

Another value we need is the crafting bonus location. For this calculator, I removed the blackzone(bz) bonus in the constant variables. 
Crafting bonuses have two values, one for not using focus and another for using focus. Basically, there is an additional bonus if players are crafting with focus.

#CBl
Crafting Bonus Location : [With Focus, Without Focus]
royalCityBonus: [.367, .539],
royalCityNoBonus: [.152, .435],
royalIslandBonus: [.285, .497],
royalIslandNoBonus: [0, .371]

Finally, refining per tier needs an X amount of low tiered refined materials and an X an amount of raw materials that you want to refine. The quantity varies per tier. Below is the list:

Tier to Refine || Raw materials || Refined Materials
T4			===			2 T4 Raw Materials			===			1 T3 Refined Materials
T5			===			3 T5 Raw Materials			===			1 T4 Refined Materials
T6			===			4 T6 Raw Materials			===			1 T5 Refined Materials
T7			===			5 T7 Raw Materials			===			1 T6 Refined Materials
T8			===			5 T8 Raw Materials			===			1 T7 Refined Materials


### Formula

We start first with Focus Cost. This will determine how much focus points it will cost to refine a specific tier. The calculations goes like this: 

FocusCost = baseCost * (focusCostEfficiency/10000)^0.5

Then for the focus cost efficiency, you add the total mastery specs of all tier multiplied by 30 and specialization for the specific tier you want to refine multiplied by 250. It goes like this:

totalMastery = (T4 + T5 + T6 + T7 + T8) * 30
specificTierSpecs = tierToRefineSpecs * 250

focusCostEfficiency = totalMastery + specificTierSpecs

For the baseCost, we just need to take it from [base cost](#./constVariables.js).

