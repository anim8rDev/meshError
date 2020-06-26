import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
// import { useSpring, a } from "react-spring/three"
import { a } from "@react-spring/three"
import { Canvas } from "react-three-fiber"
import * as easings from "d3-ease"

const IndexPage = () => {
  const ball = useRef()

  function Button1() {}

  function Button2() {}

  return (
    <Screen>
      <button onClick={Button1}>1</button>
      <button onClick={Button2}>2</button>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 900], near: 0.01, far: 3000, fov: 30 }}>
          <a.mesh ref={ball} position-x={0}>
            <sphereBufferGeometry attach="geometry" args={[100, 25, 25]} />
            <meshStandardMaterial roughness="1" metalness="0" attach="material" color="#785988" />
          </a.mesh>
          <ambientLight intensity={0.7} />
        </Canvas>
      </CanvasContainer>
    </Screen>
  )
}

const Screen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
`

const CanvasContainer = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  height: 500px;
  background-color: darkgrey;
`

export default IndexPage
