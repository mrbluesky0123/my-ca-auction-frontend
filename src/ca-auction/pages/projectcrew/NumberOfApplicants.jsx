import React, {useState} from "react";
import {Box, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const NumberOfApplicants = (props) => {
  const [radioSelected, setRadioSelected] = useState("");
  const [applicants, setApplicants] = useState(
    [
      {
        name: "luke.k0",
        approved: "00"
      },
      {
        name: "luke.k1",
        approved: "01"
      },
      {
        name: "luke.k2",
        approved: "02"
      },
      {
        name: "luke.k3",
        approved: "00"
      },
      {
        name: "luke.k4",
        approved: "01"
      },
      {
        name: "luke.k5",
        approved: "02"
      }
    ]
  );

  const buttonBackgroundColor = (approved) => {
    switch (approved) {
      case "00":
        return "#0091ea";
        break;
      case "01":
        return "#ef6c00";
        break;
      case "02":
        return "#673ab7";
        break;
      default:
        return "#000000";
    }
  };


  function memberList() {
    const arr = [];
    applicants.map((value, idx) =>
        // for (let value of applicants.values())
      {
        if (radioSelected == "" || radioSelected == value.approved) {
          arr.push(
            // <AlertDialog name={value}></AlertDialog>

            <Button variant="contained"
                    key={value.name}
                    value={value.name}
                    sx={{
                      textTransform: 'unset',
                      margin: "0.25em",
                      backgroundColor: buttonBackgroundColor(value.approved),
                      color: "white",
                      "&:hover": {
                        backgroundColor: buttonBackgroundColor(value.approved),
                        cursor: "pointer"
                      }
                    }}
                    onClick={(e) => {


                      setApplicants(() => {
                        const arr = [...applicants]
                        const index = arr.findIndex(obj => obj.name === e.target.value)

                        const item = arr[index]

                        if (item.approved === "01" || item.approved === "02") {
                          arr[index].approved = "00"
                        } else {
                          arr[index].approved = "01"
                        }

                        return arr
                      })

                      // console.log(e.target.value);
                      //
                      // let item = applicants.filter(obj => obj.name === e.target.value)[0];
                      // console.log(item)
                      // if (item.approved == "03" || item.approved == "01") {
                      //   item.approved = "00";
                      // } else {
                      //   item.approved = "01";
                      // }
                      //
                      // setApplicants(() => {
                      //   const index = applicants.findIndex(obj => obj.name === e.target.value)
                      //   console.log(index)
                      //   return applicants.splice(index, 1, item)
                      // })
                      //
                      // console.log(applicants);
                    }}
            >{value.name}</Button>
          )
        }
      }
    )
    return arr;
  }


  return (
    <div>

      <FormLabel style={{
        marginLeft: "0.71em",
        marginTop: "-0.71em",
        paddingLeft: "0.44em",

        zIndex: 2,
        backgroundColor: "rgb(255, 254, 247)",
        fontSize: "0.875em",
        display: "flex"
      }}>
        <RadioGroup
          row
        >
          <FormControlLabel value="female"
                            control={<></>}
                            label={<Typography sx={{fontSize: 15}}>지원자 목록</Typography>}/>
          <FormControlLabel value=""
                            control={<Radio size={"small"} onChange={(e) => {
                              setRadioSelected(e.target.value);
                            }
                            }/>}
                            label={<Typography
                              sx={{
                                fontSize: 14,
                                borderWidth: 1,
                                borderColor: buttonBackgroundColor(""),
                                borderRadius: 1,
                                paddingY: 0.25,
                                paddingX: 2,
                                color: buttonBackgroundColor("")
                              }}>전체</Typography>}/>
          <FormControlLabel value="02"
                            control={<Radio size={"small"} onChange={(e) => {
                              setRadioSelected(e.target.value);
                            }
                            }/>}
                            label={<Typography
                              sx={{
                                fontSize: 14,
                                borderWidth: 1,
                                borderColor: buttonBackgroundColor("02"),
                                borderRadius: 1,
                                paddingY: 0.25,
                                paddingX: 1,
                                color: buttonBackgroundColor("02")
                              }}>미결정</Typography>}/>
          <FormControlLabel value="00"
                            control={<Radio size={"small"} onChange={(e) => {
                              setRadioSelected(e.target.value);
                            }
                            }/>}
                            label={<Typography
                              sx={{
                                fontSize: 14,
                                borderWidth: 1,
                                borderColor: buttonBackgroundColor("00"),
                                borderRadius: 1,
                                paddingY: 0.25,
                                paddingX: 2,
                                color: buttonBackgroundColor("00")
                              }}>수락</Typography>}/>
          <FormControlLabel value="01"
                            control={<Radio size={"small"} onChange={(e) => {
                              setRadioSelected(e.target.value);
                            }
                            }/>}
                            label={<Typography
                              sx={{
                                fontSize: 14,
                                borderWidth: 1,
                                borderColor: buttonBackgroundColor("01"),
                                borderRadius: 1,
                                paddingY: 0.25,
                                paddingX: 2,
                                color: buttonBackgroundColor("01")
                              }}>거절</Typography>}/>
        </RadioGroup>
      </FormLabel>


      <Box
        sx={{
          // border: "1px solid",
          // borderColor: "orange",
          width: '100%',
          height: '100%',
          padding: 1,
          // padding: '3em',
          borderRadius: 2
        }}>
        <div className={'max-h-36 overflow-y-auto'}>
          {memberList()}
        </div>

      </Box>


    </div>
  );

}

export default NumberOfApplicants;
