// import logo from './logo.svg';
// import './App.css';
import axios from "axios";

function GPT4 ({name, eng_name, chin_name, birthday}){
    
    const messages=[
        {role: 'user', 
        content: `
            인스타그램 아이디 추천을 받으려고 합니다. 아이디는 여러 방법으로 만들 수 있습니다.
            "이하윤"이라는 이름을 예시로 들어서 여러 방법을 설명해드리겠습니다.
            1. 이름을 분리하여 각각의 사전에서 번역된 뜻 찾아서 합치기
            예) "이하윤" -> "lee_ha_yun", "이"+"하윤" -> "tooth_hayun", "이하"+"윤" -> below_yun, "이"+"하"+"윤" -> "tooth_under_glow"
            2. 이름의 한자 뜻을 번역한 영어 단어와 음을 영어로 바꿔서 합치기
            예) "이하윤"의 한자 뜻 : "오얏 리" + "물 하" + "윤택할 윤" -> "lee_water_yun", "lee_water_glow", "haglow"
            3. 모음 하나를 여러번 사용하기
            예) "이하윤" -> "hayuuuuun", "이하윤" -> "haaaaaayun"
            4. '._.'와 's2'와 같이 귀여운 이모티콘 넣기
            예) "이하윤" -> "ha._.yun", "hayun_s2"
            5. 알파벳과 비슷하게 생긴 숫자로 대치하기 "e" -> 3, "i" -> 1, "o" -> 0, "s" -> 5, "l" -> 1, "z" -> "2", "b" -> 8
            주의! 너무 많은 알파벳을 대치하면 이상하기 때문에 최대 1~2개만 대치하는 걸 추천합니다.
            예) "정서영" -> "s3oy0ung", "se0_young"
            6. 아이디 뒤에 좋아하는 숫자를 붙이기
            예) "이하윤"이 좋아하는 숫자가 1004인 경우 : "hayun1004", "hayun_1004"
            7. 별명 사용하기
            예) "이하윤"의 별명 "식인토끼" -> "eatingrabbit"
            아이디에는 알파벳 소문자와 대문자 그리고 '.'과 '_' 기호만 사용할 수 있습니다. 보통은 알파벳 대문자나 소문자 중에는 소문자를 많이 사용하고, 소문자와 대문자를 섞어서 사용하지는 않는 편입니다. 음절사이에는 언더바('_')나 귀여운 표정('._.')을 많이 넣습니다.
            앞에서 설명한 방법을 종합해서 이름이 "김서인"("kim seoin")이고, 한자 뜻이 "성 김, 글 서, 끌 인"이고, 생일이 "0110"이고, 별명이 "귀요미"인 사람에 대한 인스타그램 아이디를 여러개 추천해서 출력하면 됩니다. 
            출력은 별다른 설명 없이 아이디를 나열해서 javascript의 Array 형태로 반환되어야 합니다.
            ["lee_ha_yun", "ha._.yun", "eatingrabbit1004"]
        `
    }]
    const headers={
        "Content-Type": "application/json", 
        Authorization: "Bearer "+process.env.REACT_APP_OPENAI_KEY
        // Authorization: "Bearer "+" "
    }
    
    // const handleSubmit=(e)=>{
        return axios.post("https://api.openai.com/v1/chat/completions",
         JSON.stringify({
            messages: messages, 
            model: "gpt-4"
         }),
         {headers,}
         )
        .then((res)=>{
            return res.data.choices[0].message.content
        })
        .catch((err)=>{
            console.log("error: "+ err.response.data.error)
            alert("에러 발생!");
            return ""
        })
    // }
    
}

export default GPT4;