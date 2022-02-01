import styled from 'styled-components'


const FooterWrapper = styled.div`
  width: 100%;
  position: absolute;
  backdrop-filter: blur(0px) saturate(180%);
    -webkit-backdrop-filter: blur(0px) saturate(180%);
    background-color: rgba(25, 31, 55, 0.5);
    border-radius: 12px;
  bottom: 0;
  .col-4{
    padding: 10px 20px;
    border-radius: 50px 50px 0 0;
    &.active{
      background-color: #2C314F;
      a{
        color: #fbe206 !important;
      }
    }
    font-size: 18px;
    font-weight: bold;
    a{
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
`

export default FooterWrapper;