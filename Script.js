var PV_Monster1 = 80 
document.getElementById("PV_Monster1").innerHTML
var PV_Monster2 = 100
document.getElementById("PV_Monster2").innerHTML
var PV_Monster3 = 80
document.getElementById("PV_Monster3").innerHTML

var Atk_Monster1 = 30
var Atk_Monster2 = 40
var Atk_Monster3 = 30

var PV_BloodMage = 200
var PV_Alchemsit = 190
var PV_Paladin = 260

var Atk_BloodMage = 30
var Atk_Alchemsit = 30
var Atk_Paladin = 30

var Defence_BloodMage = 5
var Defence_Alchemist = 5
var Defence_Paladin = 5

var CostSpell_BloodMage = 30
var CostSpell_Alchemist = 20
var CostSpell_Paladin = 20

var CostDefence_BloodMage = 20
var CostDefence_Alchemist = 20
var CostDefence_Paladin = 10

var ValueDefence_BloodMage = 20
var ValueDefence_Alchemist = 20
var ValueDefence_Paladin = 45

var Atk_Spell_BloodMage = 80
var Atk_Spell_Alchemist = 50
var Heal_Spell_Paladin = 80

var Turn = 0

document.getElementById("PMonster1").onmouseover = function(){
    document.getElementById("Bubble1").style.visibility = "visible"
}

document.getElementById("PMonster1").onmouseout = function(){
    document.getElementById("Bubble1").style.visibility = "hidden"
}

document.getElementById("PMonster2").onmouseover = function(){
    document.getElementById("Bubble2").style.visibility = "visible"
}

document.getElementById("PMonster2").onmouseout = function(){
    document.getElementById("Bubble2").style.visibility = "hidden"
}

document.getElementById("PMonster3").onmouseover = function(){
    document.getElementById("Bubble3").style.visibility = "visible"
}

document.getElementById("PMonster3").onmouseout = function(){
    document.getElementById("Bubble3").style.visibility = "hidden"
}

function attackBloodMage() {
	PV_Monster1 = document.getElementById("PV_Monster1").innerHTML 
	PV_Monster1 -= Atk_BloodMage
	document.getElementById("PV_Monster1").innerHTML = PV_Monster1
}

