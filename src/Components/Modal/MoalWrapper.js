import styled from 'styled-components'

const ModalWrapper = styled.div`
  z-index:999;
	width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  display: flex;
  height:100vh;
  position: fixed;
  top: 0;
  left: 0;
  .row{
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  	.box-modal{
      position: relative;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  padding: 20px;
	  border-radius: 15px;
	  background-color: #fff;
	  .times{
        position: absolute;
	    top: 10px;
        right: 10px;
	    font-size: 40px;
	    color: red;
	    width: 60px;
	    height: 60px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	  }
	  .title{
	    color: #FBE206;
	    font-size: 24px;
	    font-weight: bold;
	  }
	  .vaqt{
	    font-size: 60px;
	    letter-spacing: 4px;
	    color: #191F37;
	    font-weight: bold;
	  }
    }
  }
`

export default ModalWrapper;