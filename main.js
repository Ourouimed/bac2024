let bac = document.querySelector(".bac-sec");
let natSecPc = document.querySelector(".national-sec.pc");
let natSecSvt = document.querySelector(".national-sec.svt");
let natSecSma = document.querySelector(".national-sec.sma");
let natSecSmb = document.querySelector(".national-sec.smb");
let natSecAgro = document.querySelector(".national-sec.agro");
let natSecL = document.querySelector(".national-sec.lettre");
let natSecSH = document.querySelector(".national-sec.sh");

// bac calculator
function Bac(){
    let s1 = bac.querySelector("#s1"),
    s2 = bac.querySelector("#s2"),
    national = bac.querySelector("#national"),
    regional = bac.querySelector("#regional"),
    bac_calc = bac.querySelector("#calc"),
    bac_note = bac.querySelector("#note"),
    mention = bac.querySelector("#mention")


bac_calc.addEventListener("click" , ()=>{
    if(s1.value != "" && s2.value != "" && regional.value != "" && national.value != ""){
        if(s1.value >= 0 && s1.value <= 20 && s2.value >= 0 && s2.value <= 20 && regional.value >= 0 && regional.value <= 20 && national.value >= 0 && national.value <= 20){
            let classe = +((+s1.value + +s2.value)/2)
            let result = (classe * 0.25) + +(+regional.value * .25) + +(+national.value *0.5)
            bac_note.innerHTML = result.toFixed(2);



            if(result < 10){
                mention.innerHTML = "غير ناجح"
                mention.style.color = "red"
            }
            else if(result >= 10 && result < 12){
                mention.innerHTML = "مقبول"
                mention.style.color = "#ff9d1b"
            }
            else if(result >= 12 && result < 14){
                mention.innerHTML = "مستحسن"
                mention.style.color = "#ebd615"
            }
            else if(result >= 14 && result < 16){
                mention.innerHTML = "جيد"
                mention.style.color = "#a5d868"
            }
            else if(result >= 16 && result < 18){
                mention.innerHTML = "جيد جدا"
                mention.style.color = "#8bff00"
            }
            else {
                mention.innerHTML = "ممتاز"
                mention.style.color = "#01b700"
            }
        }
        else {
            alert("نقطة غير ممكنة")
        }
    }
    else {
        alert("اكمل ادخال النقط")
    }
}) 

}
Bac();

// national pc calculator
function NatPC() {
        let math = natSecPc.querySelector("#math"),
        pc = natSecPc.querySelector("#pc"),
        svt = natSecPc.querySelector("#svt"),
        ph = natSecPc.querySelector("#ph"),
        eng = natSecPc.querySelector("#eng"),
        nat_calc = natSecPc.querySelector("#calc"),
        nat_note = natSecPc.querySelector("#note")

    nat_calc.addEventListener("click" , ()=>{
        if(math.value != "" && pc.value != "" && svt.value != "" && ph.value != "" && eng.value != ""){
            if(math.value >= 0 && math.value <= 20 && pc.value >= 0 && pc.value <= 20 && svt.value >= 0 && svt.value <= 20 && ph.value >= 0 && ph.value <= 20 && eng.value >= 0 && eng.value <= 20){
                let result =  ((+math.value *7) + (+pc.value *7) + (+svt.value *5) + (+ph.value *2) + (+eng.value *2))/23
                nat_note.innerHTML = result.toFixed(2);
            }
            else {
                alert("نقطة غير ممكنة")
            }
        }
        else {
            alert("اكمل ادخال النقط")
        }
    })
}
NatPC();



// national svt calculator
function NatSvt(){
        let math = natSecSvt.querySelector("#math"),
        pc = natSecSvt.querySelector("#pc"),
        svt = natSecSvt.querySelector("#svt"),
        ph = natSecSvt.querySelector("#ph"),
        eng = natSecSvt.querySelector("#eng"),
        nat_calc = natSecSvt.querySelector("#calc"),
        nat_note = natSecSvt.querySelector("#note")

    nat_calc.addEventListener("click" , ()=>{
        if(math.value != "" && pc.value != "" && svt.value != "" && ph.value != "" && eng.value != ""){
            if(math.value >= 0 && math.value <= 20 && pc.value >= 0 && pc.value <= 20 && svt.value >= 0 && svt.value <= 20 && ph.value >= 0 && ph.value <= 20 && eng.value >= 0 && eng.value <= 20){
                let result =  ((+math.value *7) + (+pc.value *5) + (+svt.value *7) + (+ph.value *2) + (+eng.value *2))/23
                nat_note.innerHTML = result.toFixed(2);
            }
            else {
                alert("نقطة غير ممكنة")
            }
        }
        else {
            alert("اكمل ادخال النقط")
        }
    })
}
NatSvt();

// national sma calculator
function NatSma(){
        let math = natSecSma.querySelector("#math"),
        pc = natSecSma.querySelector("#pc"),
        svt = natSecSma.querySelector("#svt"),
        ph = natSecSma.querySelector("#ph"),
        eng = natSecSma.querySelector("#eng"),
        nat_calc = natSecSma.querySelector("#calc"),
        nat_note = natSecSma.querySelector("#note")

    nat_calc.addEventListener("click" , ()=>{
        if(math.value != "" && pc.value != "" && svt.value != "" && ph.value != "" && eng.value != ""){
            if(math.value >= 0 && math.value <= 20 && pc.value >= 0 && pc.value <= 20 && svt.value >= 0 && svt.value <= 20 && ph.value >= 0 && ph.value <= 20 && eng.value >= 0 && eng.value <= 20){
                let result =  ((+math.value *9) + (+pc.value *7) + (+svt.value *3) + (+ph.value *2) + (+eng.value *2))/23
                nat_note.innerHTML = result.toFixed(2);
            }
            else {
                alert("نقطة غير ممكنة")
            }
        }
        else {
            alert("اكمل ادخال النقط")
        }
    })
}
NatSma();


// national smb calculator
function NatSmb(){
        let math = natSecSmb.querySelector("#math"),
        pc = natSecSmb.querySelector("#pc"),
        si = natSecSmb.querySelector("#si"),
        ph = natSecSmb.querySelector("#ph"),
        eng = natSecSmb.querySelector("#eng"),
        nat_calc = natSecSmb.querySelector("#calc"),
        nat_note = natSecSmb.querySelector("#note")

    nat_calc.addEventListener("click" , ()=>{
        if(math.value != "" && pc.value != "" && si.value != "" && ph.value != "" && eng.value != ""){
            if(math.value >= 0 && math.value <= 20 && pc.value >= 0 && pc.value <= 20 && svt.value >= 0 && svt.value <= 20 && ph.value >= 0 && ph.value <= 20 && eng.value >= 0 && eng.value <= 20){
                let result =  ((+math.value *9) + (+pc.value *7) + (+si.value *3) + (+ph.value *2) + (+eng.value *2))/23
                nat_note.innerHTML = result.toFixed(2);
            }
            else {
                alert("نقطة غير ممكنة")
            }
        }
        else {
            alert("اكمل ادخال النقط")
        }
    })
}
NatSma();

// national S.Agro calculator
function NatAgro(){
    let math = natSecAgro.querySelector("#math"),
    pc = natSecAgro.querySelector("#pc"),
    svt = natSecAgro.querySelector("#svt"),
    sva = natSecAgro.querySelector("#sva"),
    ph = natSecAgro.querySelector("#ph"),
    eng = natSecAgro.querySelector("#eng"),
    nat_calc = natSecAgro.querySelector("#calc"),
    nat_note = natSecAgro.querySelector("#note")

nat_calc.addEventListener("click" , ()=>{
    if(math.value != "" && pc.value != "" && svt.value != "" && sva.value != "" && ph.value != "" && eng.value != ""){
        if(math.value >= 0 && math.value <= 20 && pc.value >= 0 && pc.value <= 20 && svt.value >= 0 && svt.value <= 20 && ph.value >= 0 && ph.value <= 20 && eng.value >= 0 && eng.value <= 20 && sva.value >= 0 && sva.value <= 20){
            let result =  ((+math.value *7) + (+pc.value *5) + (+svt.value *5) + (+sva.value *5) + (+ph.value *2) + (+eng.value *2))/28
            nat_note.innerHTML = result.toFixed(2);
        }
        else {
            alert("نقطة غير ممكنة")
        }
    }
    else {
        alert("اكمل ادخال النقط")
    }
})
}
NatAgro()


// national Lettre calculator
function NatLettre(){
    let ar = natSecL.querySelector("#ar"),
    ph = natSecL.querySelector("#ph"),
    hg = natSecL.querySelector("#hg"),
    eng = natSecL.querySelector("#eng"),
    nat_calc = natSecL.querySelector("#calc"),
    nat_note = natSecL.querySelector("#note")

nat_calc.addEventListener("click" , ()=>{
    if(ar.value != "" && ph.value != "" && hg.value != "" && eng.value != ""){
        if(ar.value >= 0 && ar.value <= 20 && ph.value >= 0 && ph.value <= 20 && hg.value >= 0 && hg.value <= 20 && eng.value >= 0 && eng.value <= 20){
            let result =  ((+ar.value *4) + (+eng.value *4) + (+hg.value *3) + (+ph.value *3))/14
            nat_note.innerHTML = result.toFixed(2);
        }
        else {
            alert("نقطة غير ممكنة")
        }
    }
    else {
        alert("اكمل ادخال النقط")
    }
})
}
NatLettre();

// national SH calculator
function NatSH(){
    let ar = natSecSH.querySelector("#ar"),
    ph = natSecSH.querySelector("#ph"),
    hg = natSecSH.querySelector("#hg"),
    eng = natSecSH.querySelector("#eng"),
    nat_calc = natSecSH.querySelector("#calc"),
    nat_note = natSecSH.querySelector("#note")

nat_calc.addEventListener("click" , ()=>{
    if(ar.value != "" && ph.value != "" && hg.value != "" && eng.value != ""){
        if(ar.value >= 0 && ar.value <= 20 && ph.value >= 0 && ph.value <= 20 && hg.value >= 0 && hg.value <= 20 && eng.value >= 0 && eng.value <= 20){
            let result =  ((+ar.value *3) + (+eng.value *3) + (+hg.value *4) + (+ph.value *4))/14
            nat_note.innerHTML = result.toFixed(2);
        }
        else {
            alert("نقطة غير ممكنة")
        }
    }
    else {
        alert("اكمل ادخال النقط")
    }
})
}
NatSH();



// Select form 
let SelectForm = document.forms["selectForm"];
let SelectList = SelectForm.list;
let SelectOptions = SelectList.options;

SelectForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    let optionValue = SelectList.value
    if(optionValue == 1){
        bac.style.display = "block";
        natSecPc.style.display = "none";
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "none";
    }
    else if(optionValue == 2){
        bac.style.display = "none";
        natSecPc.style.display = "block"; 
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "none";
    }
    else if(optionValue == 3){
        bac.style.display = "none";
        natSecPc.style.display = "none"; 
        natSecSvt.style.display = "block"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "none";
    }
    else if(optionValue == 4){
        bac.style.display = "none";
        natSecPc.style.display = "none"; 
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "block";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "none";
    }
    else if(optionValue == 5){
        bac.style.display = "none";
        natSecPc.style.display = "none"; 
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "block";
        natSecAgro.style.display = "none";
    }
    else if(optionValue == 6){
        bac.style.display = "none";
        natSecPc.style.display = "none"; 
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "block";
        natSecL.style.display = "none";
        natSecSH.style.display = "none";
    }
    else if(optionValue == 7){
        bac.style.display = "none";
        natSecPc.style.display = "none"; 
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "none";
        natSecL.style.display = "block";
        natSecSH.style.display = "none";
    }
    else if(optionValue == 8){
        bac.style.display = "none";
        natSecPc.style.display = "none"; 
        natSecSvt.style.display = "none"; 
        natSecSma.style.display = "none";
        natSecSmb.style.display = "none";
        natSecAgro.style.display = "none";
        natSecL.style.display = "none";
        natSecSH.style.display = "block";
    }
    console.log(optionValue)
})
