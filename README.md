# Albion Online Refining Calculator App

### This is my take on Refining Calculator for Albion Online game

##### How does Albion Online do refining calculations?

First off, Albion Online relies on *specs* (specialization) of player.
Starting from Tier 4(t4) up to Tier 8(t8), you get specialization for each tier of materials when refining.
Specialization is like levels you grind in most mmos.
There is a minimum of 1 specs once you unlocked the tier and maximum of 100.

Each tier has 3 levels of enchantment:
x.1 = common
x.2 = rare
x.3 = exceptional

Aside from specs, refining needs **focus** as well. These are replenised every 3 days for a maximum of **30000** points.

Using Focus Points also adds crafting bonus per location. See resource return rate per [location](#resource-return-rate).
There is a focus cost for each refining per tier of materials. And the more specs you have, the less focus points you need to refine said materials.

Each materials has a base cost per tier and enchantment.
You can see base cost per tier per enchantment in: [base cost](#base-cost)

Another value we need is the crafting bonus location. For this calculator, I removed the blackzone(bz) bonus in the constant variables. 
Resource return rate (rrr) have two values, one for not using focus and another for using focus. Basically, there is an additional bonus if players are crafting with focus.

### Resource Return Rate   

  | Crafting Bonus per Location | Without Focus | With Focus | 
  | :-------------------------- | :-----------: | :--------: |    
  | Royal City with Bonus       |      .367     |   .539     |   
  | Royal City without Bonus    |      .152     |   .435     |     
  | Royal Island with Bonus     |      .285     |   .497     |   
  | Royal Island without Bonus  |        0      |   .371     |   
  | Black Zone Hideout          |       .2      |    .46     |   

### Materials Needed

Finally, refining per tier needs an X amount of low tiered refined materials and an X an amount of raw materials that you want to refine. The quantity varies per tier. Below is the list:
  
  | Tier to Refine | Raw Materials | Refined Materials | 
  | :------------- | :-----------: | :---------------: |    
  |       T4       |      x2       |        x1         |   
  |       T5       |      x3       |        x1         |     
  |       T6       |      x4       |        x1         |   
  |       T7       |      x5       |        x1         |   
  |       T8       |      x5       |        x1         |   


### Base Cost

  | Tier | Common | Uncommon | Rare  | Exceptional | 
  | :--: | :----: | :------: | :---: | :---------: |   
  |  T4  |    48  |     89   |   143 |     239     |  
  |  T5  |    89  |    160   |   269 |     461     |    
  |  T6  |   160  |    284   |   487 |     844     |  
  |  T7  |   284  |    500   |   866 |    1508     |  
  |  T8  |   500  |    877   |  1527 |    2666     |  


### Formula

We start first with Focus Cost. This will determine how much focus points it will cost to refine a specific tier. The calculations goes like this: 

FocusCost = baseCost * (focusCostEfficiency/10000)^0.5

Then for the focus cost efficiency, you add the total mastery specs of all tier multiplied by 30 and specialization for the specific tier you want to refine multiplied by 250. It goes like this:

totalMastery = (T4 + T5 + T6 + T7 + T8) * 30
specificTierSpecs = tierToRefineSpecs * 250

focusCostEfficiency = totalMastery + specificTierSpecs

For the baseCost, we just need to take it from [base cost](#base-cost).

