## Called on the first tick of path creation
#
# @target The player creating the path
#
# @param @s: the animation data holder
#
# @returns ArmorItems[0].tag.Anim[0]: a NBT tag on the animation data holder, storing initial state of the animation.
#                                      a Modified:1b tag will be added, so the system knows an animation was added.
# @returns Nothing if no initial state needs to be set.
