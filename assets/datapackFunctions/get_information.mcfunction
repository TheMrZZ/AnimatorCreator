## Store the animator's information inside the entity
## Will be called multiple times.
#
# Infos are:
# - Animator's Name {String} - Used to display the name of the animator
# - Animator's Tag {String} - Later, if the entity doesn't have this tag, it means the player does not want to use this animator
# - Animator's Author {String} [optional] - Used to display the name of the author
# - Animator's AuthorUrl {String} [optional] - Used to provide access to the author's website
# - Animator's Help {JSON} [optional] - Used to display help about the animator
#
# @target the entity which will store those informations

######### INFORMATION SECTION #########
# This section stores information about the Animator itself
data modify entity @s ArmorItems[0].tag.Info append value {Name:"{animatorName}"}
data modify entity @s ArmorItems[0].tag.Info[-1] merge value {Tag:"{animatorTag}"}
data modify entity @s ArmorItems[0].tag.Info[-1] merge value {Author:"TheMrZZ"}
data modify entity @s ArmorItems[0].tag.Info[-1] merge value {AuthorUrl:"reddit.com/u/TheMrZZ0"}

######### HELP SECTION #########
# This section determines which function must be called to display help about the animator.
# /!\ Do not touch anything except the function name. Else it won't work.
data modify entity @s ArmorItems[0].tag.Info[-1] merge value {Help:'{"clickEvent":{"value":"/function {datapackName}:help","action":"run_command"},"text":"ⓘ","bold":true,"color":"yellow","hoverEvent":{"action":"show_text","value":"Click to get additional informations!"}}'}


######### TAG SECTION #########
# /!\ You have to change two times the name of the tag, once in each command

# Message displayed when the animator is not selected
data modify entity @s ArmorItems[0].tag.Info[-1] merge value {NotSelected:'{"clickEvent":{"value":"/tag @s add {animatorTag}","action":"run_command"}, "text":"[ ]"}'}

# Message displayed when the animator is selected
data modify entity @s ArmorItems[0].tag.Info[-1] merge value {Selected:'{"clickEvent":{"value":"/tag @s remove {animatorTag}","action":"run_command"}, "text":"[✗]", "color":"green"}'}
