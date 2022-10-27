//變數
const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }
//歷史 存bmi,state(ov)
let bmiHistoryData =[]

//4
function showHistoryData(){
    let lastNum  = bmiHistoryData.length-1;
    let lastState  = bmiHistoryData[lastNum].state;

    console.log(`「您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！」`);

}
//3
function addData(bmi,state){
    let obj = {}
    obj.bmi =bmi;
    obj.state = state;
    bmiHistoryData.push(obj)
}

//2
function bmiTxtMaker(state){
    console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
}
//1
//overThin,normal,overWeight,mildFat,moderateFat,severeFat
function printBmi(height,weight){
    let bmi  = (weight / (height/100)**2).toFixed(2);
    if(bmi<18.5){
        addData(bmi,'overThin')
        bmiTxtMaker('overThin')
    }else if(bmi>=18.5 && bmi<24){
        addData(bmi,'normal')
        bmiTxtMaker('normal')
    }else if(bmi>=24 && bmi<27){
        addData(bmi,'overWeight')
        bmiTxtMaker('overWeight')
    }else if(bmi>=27 && bmi<30){
        addData(bmi,'mildFat')
        bmiTxtMaker('mildFat')
    }else if(bmi>=30 && bmi<35){
        addData(bmi,'moderateFat')
        bmiTxtMaker('moderateFat')
    }else if(bmi>=35){
        addData(bmi,'severeFat')
        bmiTxtMaker('severeFat')
    }else{
        console.log('您的數值輸入錯誤，請重新輸入');
    }
}

printBmi(178, 20)
printBmi(178, 70)
printBmi(178, 85)
showHistoryData()
printBmi(178, 90)
printBmi(178, 110)
printBmi(178, 130)
printBmi()
showHistoryData()
console.log(bmiHistoryData);

// **第一階段：請寫 printBmi 函式，並印出對應狀態**
// bmi<18.5
// 18.5<=bmi && bmi<24
// 24<=bmi && bmi<27
// 27<=bmi && bmi<30
// 30<=bmi && bmi<35
// bmi>=35

// printBmi(178, 20)
// printBmi(178, 70)
// printBmi(178, 85)
// printBmi(178, 90)
// printBmi(178, 110)
// printBmi(178, 130)
// printBmi()

// 您的體重過輕
// 您的體重正常
// 您的體重過重
// 您的體重輕度肥胖
// 您的體重中度肥胖
// 您的體重重度肥胖
// 您的數值輸入錯誤，請重新輸入

// **第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
// const bmiStatesData = {
//     "overThin": {
//       "state": "過輕",
//       "color": "藍色"
//     },
//     "normal": {
//       "state": "正常",
//       "color": "紅色"
//     },
//     "overWeight": {
//       "state": "過重",
//       "color": "澄色"
//     },
//     "mildFat": {
//       "state": "輕度肥胖",
//       "color": "黃色"
//     },
//     "moderateFat": {
//       "state": "中度肥胖",
//       "color": "黑色"
//     },
//     "severeFat": {
//       "state": "重度肥胖",
//       "color": "綠色"
//     },
//   }

// **第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」
