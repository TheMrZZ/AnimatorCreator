## Called each tick by the player creating an animation
#
# @target The player creating the animation
#
# @param @s time: the number of ticks elapsed since beginning of the path creation
# @param @s: the animation data holder
#
# @returns ArmorItems[0].tag.Anim[-1]: a NBT tag on the animation data holder, storing the new animation frame.
#                                      a Modified:1b tag will be added, so the system knows an animation frame was added.
# @returns Nothing if no animation needs to be added
