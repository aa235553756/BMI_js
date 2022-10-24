// ----物件資料
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

// ----bmiHistoryData & 計算查詢次數
let bmiHistoryData = [];
function showHistoryData(){
    const totalNum = bmiHistoryData.length;
    const lastNum = totalNum - 1;
    const lastState = bmiHistoryData[lastNum].state;

    console.log(`您總共計算 ${totalNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastNum].bmi}，體重${bmiStatesData[lastState].state}！健康指數為${bmiStatesData[lastState].color}！`);
}

// ----addData 推進Historydata函式
function addData(bmi,state){
    let obj = {};
    obj.bmi = bmi;
    obj.state = state;
    bmiHistoryData.push(obj);
}

// ----Stated印出函式
function bmiStatesText(state){
    console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
}

// ----判斷BMI函式
function printBmi(height,weight){
    let bmi = (weight/ ( (height/100) ** 2 )).toFixed(2)
    if(bmi<18.5){
        addData(bmi,'overThin')
        bmiStatesText('overThin')
    }else if(18.5 <= bmi && bmi<24){
        addData(bmi,'normal')
        bmiStatesText('normal')
    }else if(24 <= bmi && bmi<27){
        addData(bmi,'overWeight')
        bmiStatesText('overWeight')
    }else if(27 <= bmi && bmi<30){
        addData(bmi,'mildFat')
        bmiStatesText('mildFat')
    }else if(30 <= bmi && bmi<35){
        addData(bmi,'moderateFat')
        bmiStatesText('moderateFat')
    }else if(bmi>35){
        addData(bmi,'severeFat')
        bmiStatesText('severeFat')
    }else{
        console.log('您輸入的數值輸入錯誤，請重新輸入');
    }
}

printBmi(178,20)
printBmi(178,70)
printBmi(178,85)
showHistoryData()
// printBmi(178,90)
// printBmi(178,110)
// printBmi(178,130)
// printBmi()


