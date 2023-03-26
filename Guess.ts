import {question} from "readline-sync"

console.log("Hello PlayerOne");

let Diem: number = 0;
let min: number = 1;
let max: number = 3;
let SoLuotChoi: number = 1;
let SoBiMat: number = Math.floor(Math.random() * (max - min + 1) + min);

console.log(SoBiMat);

let SoDoan: number = Number(question("Hay nhap so ban muon doan: "));


if (SoDoan == SoBiMat) {
    if (SoLuotChoi == 1) {
        Diem = 100;
    }
    else if (SoLuotChoi == 2) {
        Diem = 70;
    }
    else {
        Diem = 30;
    }
    console.log("Ban chien thang voi: " + Diem);
}
else {
     if (SoDoan < SoBiMat) {
        console.log("So cua ban nho qua");
    }
    else {
        console.log("So cua ban lon qua");
    }
    if (SoLuotChoi <= 3) {
        let SoDoan: number = Number(question("Hay nhap so ban muon doan: "));
    
        if (SoDoan == SoBiMat) {
            if (SoLuotChoi == 1) {
                Diem = 100;
            }
            else if (SoLuotChoi == 2) {
                Diem = 70;
            }
            else {
                Diem = 30;
            }
            console.log("Ban chien thang voi: " + Diem);
        }
        else {
            if (SoDoan < SoBiMat) {
                console.log("So cua ban nho qua");
            }
            else {
                console.log("So cua ban lon qua");
            }
            SoLuotChoi++;
            // Cho choi luot tiep theo
            if (SoLuotChoi <= 3) {
                let SoDoan: number = Number(question("Hay nhap so ban muon doan: "));
            
                if (SoDoan == SoBiMat) {
                    if (SoLuotChoi == 1) {
                        Diem = 100;
                    }
                    else if (SoLuotChoi == 2) {
                        Diem = 70;
                    }
                    else {
                        Diem = 30;
                    }
                    console.log("Ban chien thang voi: " + Diem);
                }
                else if (SoDoan < SoBiMat) {
                    console.log("So cua ban nho qua");
                }
                else {
                    console.log("So cua ban lon qua");
                }
                SoLuotChoi++;
            }
            else {
                console.log("XIn chia buon cung ban, ban da thua!");
            }
        }
        SoLuotChoi++;
    }
    else {
        console.log("XIn chia buon cung ban, ban da thua!");
    }
    SoLuotChoi++;
}


// if (SoLuotChoi > 3 && SoDoan != SoBiMat) {
//     console.log("XIn chia buon cung ban, ban da thua!");
//     console.log("So bi mat la: " + SoBiMat);
// }
