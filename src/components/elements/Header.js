import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    width: 100vw;
    height: 6vh;
    border-bottom: 1px solid #666;
    position: relative;
    top:0;
    left:0;
`

function Header() {
  return (
    <Grid>
        Header
    </Grid>
  )
}

export default Header