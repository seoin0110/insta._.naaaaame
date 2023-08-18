import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Result from "./Result";
import { BsGithub } from "react-icons/bs";
// import { GPT3 } from "../api/OpenAI";
// import Loader from "react-spinners/PulseLoader";

const Main = () => {
	useEffect(() => {
		setIsResult(false);
		setResult("");
	}, []);
	const [strings, setStrings] = useState({
		name: "",
		eng_name: "",
		chin_name: "",
		birthday: "",
		team: "",
	});
	const onChangeNameInput = useCallback(
		(e) => {
			setStrings({ ...strings, name: e.target.value });
		},
		[strings]
	);
	const onChangeEngNameInput = useCallback(
		(e) => {
			setStrings({ ...strings, eng_name: e.target.value });
		},
		[strings]
	);
	const onChangeChinNameInput = useCallback(
		(e) => {
			setStrings({ ...strings, chin_name: e.target.value });
		},
		[strings]
	);
	const onChangeBirthdayInput = useCallback(
		(e) => {
			setStrings({ ...strings, birthday: e.target.value });
		},
		[strings]
	);
	const onChangeTeamInput = useCallback(
		(e) => {
			setStrings({ ...strings, team: e.target.value });
		},
		[strings]
	);
	const [isResult, setIsResult] = useState(false);
	const [isResult2, setIsResult2] = useState(false);
	const [result, setResult] = useState("");
	const [result2, setResult2] = useState("");
	const [loading, setLoading] = useState(false);
	const PrePost = () => {
		//console.log(strings);
		if (
			strings.name === "" ||
			strings.eng_name === "" ||
			strings.chin_name === "" ||
			strings.birthday === "" ||
			strings.team === ""
		) {
			alert("모든 필드를 전부 작성했는지 다시 확인해주세요!");
		} else {
			setLoading(true);
			// GPT3.askGPT(strings)
			// 	.then((res) => {
			// 		//console.log(res);
			// 		setResult(res.data.choices[0].message.content);
			// 		GPT3.getDirectory(strings)
			// 			.then((res) => {
			// 				//console.log(res);
			// 				setResult2(res.data.choices[0].message.content);
			// 				setLoading(false);
			// 			})
			// 			.catch((err) => console.log(err));
			// 	})
			// 	.catch((err) => console.log(err));
		}
	};
	useEffect(() => {
		//console.log("gpt 응답 : ", result);
		if (result !== "" && result !== undefined) {
			setIsResult(true);
		} else setIsResult(false);
	}, [result]);
	useEffect(() => {
		//console.log("gpt 응답 : ", result2);
		if (result2 !== "" && result2 !== undefined) {
			setIsResult2(true);
		} else setIsResult2(false);
	}, [result2]);
	return (
		<Container
			style={{
				height: isResult ? (isResult2 ? "100%" : "100vh") : "100vh",
			}}
		>
			<Top
				href="https://github.com/seoin0110/insta._.naaaaame"
				target="_blank"
			>
				<BsGithub fill="#ffffff" size="20" />
			</Top>
			<Title
				style={{
					marginTop: isResult ? (isResult2 ? "40px" : "0px") : "0px",
				}}
			>
				⭐️ insta._.naaaaame ⭐️
			</Title>
			<TitleDes>
				사용자의 정보를 바탕으로 맞춤형 인스타그램 아이디를 추천합니다.
			</TitleDes>
			<NameInput
				onChange={onChangeNameInput}
				placeholder="이름을 입력해주세요 ex. 이하윤"
			/>
			<EngNameInput
				onChange={onChangeEngNameInput}
				placeholder="영문 이름을 입력해주세요 ex. lee hayoon"
			/>
			<ChinNameInput
				onChange={onChangeChinNameInput}
				placeholder="이름의 한자 뜻을 입력해주세요 ex. 물 하, 윤택할 윤"
			/>
			<BirthdayInput
				onChange={onChangeBirthdayInput}
				placeholder="생일을 입력해주세요"
			/>
			<SubTitle>👥 팀원 소개 👥</SubTitle>
			<TeamInput
				onChange={onChangeTeamInput}
				placeholder="'팀원 이름 : 참여한 기능, 페이지'와 같이 작성하고 Enter를 통해 팀원을 구분해주세요"
				style={{ width: "50%" }}
			/>
			<Button
				onClick={() => {
					PrePost();
				}}
			>
				{loading
					? "✏️ GPT가 아이디를 생성중... ✏️"
					: "🔄 아이디 생성 🔄"}
			</Button>
			{isResult ? (
				result ? (
					result2 ? (
						<Result result={result} result2={result2} />
					) : null
				) : null
			) : null}
			<div
				style={{
					position: "absolute",
					bottom: "0px",
					zIndex: "1000",
				}}
			>
				{/* <Loader
					color="#ffffff"
					speedMultiplier="0.7"
					size="10"
					margin="5"
					loading={loading}
				/> */}
			</div>
		</Container>
	);
};

export default Main;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #833ab4; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#fcb045,
		#fd1d1d,
		#833ab4
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#fcb045,
		#fd1d1d,
		#833ab4
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	opacity: 0.8;
`;

const Top = styled.a`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	text-decoration: none;
`;

const Title = styled.div`
	color: #ffffff;
	font-family: "Pretendard";
	font-size: 30px;
	font-weight: 600;
	margin: 10px 0;
`;

const TitleDes = styled.div`
	width: 50%;
	text-align: center;
	font-family: "Pretendard";
	color: #f0f0f0;
	margin-bottom: 30px;
	word-break: keep-all;
`;

const NameInput = styled.input`
	width: 20%;
	height: 20px;
	padding: 5px;
	font-size: 14px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: 0;
`;

const SubTitle = styled.div`
	font-family: "Pretendard";
	color: #ffffff;
	font-size: 20px;
	margin: 10px 0;
`;

const EngNameInput = styled.input`
	width: 20%;
	height: 20px;
	padding: 5px;
	font-size: 14px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: 0;
`;

const ChinNameInput = styled.textarea`
	width: 20%;
	height: 20px;
	padding: 5px;
	font-size: 14px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: 0;
`;

const BirthdayInput = styled.input`
	width: 20%;
	height: 20px;
	padding: 5px;
	font-size: 14px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: 0;
`;

const TeamInput = styled.textarea`
	height: 40px;
	padding: 5px;
	font-size: 14px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: 0;
	resize: none;
`;

const Button = styled.div`
	cursor: pointer;
	min-width: 160px;
	height: 34px;
	padding: 0 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #c1cdde;
	box-shadow: 0px 0px 15px 3px rgba(255, 255, 255, 0.6);
	color: #051027;
	border-radius: 17px;
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 18px;
	margin-top: 10px;
`;
