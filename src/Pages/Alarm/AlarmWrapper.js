import styled from 'styled-components';


const AlarmWrapper = styled.div`
.mainAlarms{
  display: flex;
  flex-direction: column;
}
  .alarm-header {
    width: 100%;

    .title {
      color: #4d4f5f;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .upcoming-time{
      margin-bottom: 10px;
      font-size: 32px;
      color: #fff;
    }
    .now-time{
      color:  #FBE206;
      font-size: 18px;
    }
  }
  .add-alarm{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    button{
      width: 30px;
      height: 30px;
      display: flex;
      justify-content:center;
      align-items: center;
      border: 3px solid #FBE206;
      cursor: pointer;
    }
    i{
      font-size: 18px;
      color: #FBE206;
    }
  }
  .alarms{
    width: 100%;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      background: #2C314F;
      padding: 15px 25px;
      margin-bottom: 15px;
      color: #fff;
      .hoursAndMinutes{
        color: #fff;
        font-size: 28px;
        font-weight: 500;
      }
      .weakDays{
        margin-right: 10px;
        span{
          color: #787477;
          font-weight: bold;
          font-size: 14px;
          margin-right: 5px;
          &.active{
            color: #fbe206;
          }
        }
      }
    }
  }
`

export default AlarmWrapper;