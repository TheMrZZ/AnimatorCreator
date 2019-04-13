## Called just before the animation recording starts.
#
# Used to make external changes. This changes can be related to the Animation, but should not modify it.
#
## /!\ This must NOT change the Anim tag. This is strictly forbidden. Animation MUST NOT be changed by any "before" function.
## If you really want to change the Animation, use the function {datapackName}:creation/first_tick.
## Therefore, you are assured that other animators (and yours) will work correctly.
#
# @target The player creating the animation
#
# @param @e[name=anim_data,tag=current]: the animation data holder

# This function only purpose is to call {datapackName}:creation/before if the {animatorName} was selected
execute if entity @s[tag={animatorTag}] run function {datapackName}:creation/before
