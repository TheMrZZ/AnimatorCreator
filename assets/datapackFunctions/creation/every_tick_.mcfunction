## Called each tick by the player creating a path
#
# @target The player creating the path
#
# @param @s time: the number of ticks elapsed since beginning of the path creation
# @param @s: the animation data holder
#
# @returns ArmorItems[0].tag.Anim[-1]: a NBT tag on the animation data holder, storing the new animation frame.
#                                      a Modified:1b tag will be added, so the system knows an animation was added.
# @returns Nothing if no animation needs to be added


# This function only purpose is to call {datapackName}:creation/every_tick if the {animatorName} was selected
execute if entity @s[tag={animatorTag}] run function {datapackName}:creation/every_tick
