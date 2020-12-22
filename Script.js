var PV_Monster1 = 80 
document.getElementById("PV_Monster1").innerHTML = PV_Monster1
var PV_Monster2 = 100
document.getElementById("PV_Monster2").innerHTML = PV_Monster2
var PV_Monster3 = 80
document.getElementById("PV_Monster3").innerHTML = PV_Monster3

//-------------------------

var Atk_Monster1 = 30
var Atk_Monster2 = 40
var Atk_Monster3 = 30

var PV_BloodMage = 200
var PV_Alchemsit = 190
var PV_Paladin = 260

var Atk_BloodMage = 30
var Atk_Alchemsit = 30
var Atk_Paladin = 30

var PM_BloodMage = 100
var PM_Alchemist = 100
var PM_Paladin = 100
var PM_Depressive = 100

var Defence_BloodMage = 5
var Defence_Alchemist = 5
var Defence_Paladin = 5
var Defence_Depressive = 0

var CostSpell_BloodMage = 30
var CostSpell_Alchemist = 20
var CostSpell_Paladin = 20
var CostSpell_Depressive = 80

var CostDefence_BloodMage = 20
var CostDefence_Alchemist = 20
var CostDefence_Paladin = 10
var CostDefence_Depressive = 10

var ValueDefence_BloodMage = 20
var ValueDefence_Alchemist = 20
var ValueDefence_Paladin = 45
var ValueDefence_Depressive = 15

var Atk_Spell_BloodMage = 80
var Atk_Spell_Alchemist = 50
var Heal_Spell_Paladin = 80
var Atk_Spell_Depressive = 130

var Turn = 1
var target = 0

//-------------------------

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

//-------------------------

function deathBloodMage () {
	if PV_BloodMage <= 0
		document.getElementById("Hero1")style.visibility = "hidden"
}

 function deathAlchemist () {
 	if PV_Alchemsit <= 0
 		document.getElementById("Hero2")style.visibility = "hidden"
 }

  function deathDepressive () {
 	if PV_Depressive <= 0
 		document.getElementById("Hero3")style.visibility = "hidden"
 }

  function deathPaladin () {
 	if PV_Paladin <= 0
 		document.getElementById("Hero4")style.visibility = "hidden"
 }

//-------------------------

function AttackBloodMage() {
	PV_Monster1 = document.getElementById("PV_Monster1").innerHTML 
	PV_Monster1 -= Atk_BloodMage
	document.getElementById("PV_Monster1").innerHTML = PV_Monster1
}

function SpellBloodMage() {
	PV_Monster1 = document.getElementById("PV_Monster1").innerHTML 
	PV_Monster1 -= Atk_Spell_BloodMage
	document.getElementById("PV_Monster1").innerHTML = PV_Monster1
}

function AttackAlchemist() {
	PV_Monster1 = document.getElementById("PV_Monster1").innerHTML 
	PV_Monster1 -= Atk_Alchemsit
	document.getElementById("PV_Monster1").innerHTML = PV_Monster1
}

function SpellAlchemist() {
	PV_Monster1 = document.getElementById("PV_Monster1").innerHTML 
	PV_Monster1 -= Atk_Spell_Alchemsit
	document.getElementById("PV_Monster1").innerHTML = PV_Monster1
}

function AttackPaladin() {
	PV_Monster1 = document.getElementById("PV_Monster1").innerHTML 
	PV_Monster1 -= Atk_Paladin
	document.getElementById("PV_Monster1").innerHTML = PV_Monster1
}
