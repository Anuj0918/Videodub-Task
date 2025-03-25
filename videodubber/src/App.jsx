import React, { useState } from 'react'
import { Button, Textarea, Title, Group, Card, Container, SegmentedControl, Text } from "@mantine/core";

function App() {

  const [text, setText] = useState("Welcome to Discord Colored Text Generator!");
  const [fgColor, setFgColor] = useState("#FFFFFF");
  const [bgColor, setBgColor] = useState("#2C2F33");
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const resetText = () => {
    setText("Welcome to Rebane's Discord Colored Text Generator!");
    setFgColor("#FFFFFF");
    setBgColor("#2C2F33");
    setIsBold(false);
    setIsUnderline(false);
  };

  const getAnsiColorCode = (color) => {
    const colorMap = {
      "#808080": 30, "#FF0000": 31, "#9A9A00": 33, "#007AFF": 34, "#FF00FF": 35, "#00A79D": 36, "#FFFFFF": 37
    };
    return colorMap[color] || 37;
  };

  const getAnsiBgColorCode = (color) => {
    const bgColorMap = {
      "#001F2D": 40, "#D9534F": 41, "#607D8B": 42, "#708090": 43, "#7E57C2": 44, "#A0A0A0": 45, "#EAE0C8": 46
    };
    return bgColorMap[color] || 40;
  };

  const generateAnsiText = () => {
    const fgAnsi = getAnsiColorCode(fgColor);
    const bgAnsi = getAnsiBgColorCode(bgColor);
    const formatCodes = [1, 4].filter((_, index) => [isBold, isUnderline][index]).join(";");
    const ansiPrefix = `\u001b[${formatCodes ? formatCodes + ";" : ""}${bgAnsi};${fgAnsi}m`;
    return `\`\`\`ansi\n${ansiPrefix}${text}\u001b[0m\n\`\`\``;
  };

  const copyToClipboard = () => {
    const formattedText = generateAnsiText();
    navigator.clipboard.writeText(formattedText).then(() => alert("Copied to clipboard!"));
  };

  return (
    <Container size="sm" style={{ backgroundColor: "#414542", minHeight: "100vh", width: "100%", padding: "20px", fontWeight: "700" }}>
      <Title align="center" color="white" order={2}>
        <p className='w-full text-4xl flex gap-2 justify-center mb-10 mt-5 text-white'>Discord <p style={{ color: '#6157f7' }}>Coloured</p> Text Generator</p>
      </Title>
      <div className='w-full flex justify-center mb-10'>
        <Text align="center" mt="sm" style={{ width: "30rem", display: "flex", flexDirection: "column", justifyContent: "center", color: "white" }}>
          <strong className='m-auto mb-2'>About</strong>
          This is a simple app that creates colored Discord messages using the ANSI color codes available on the latest Discord desktop versions.
          <br />
          To use this, write your text, select parts of it and assign colors to them, then copy it using the button below, and send in a Discord message.
          <br />
          <br />
          <p>Source Code is available on my <a style={{ color: "#5374f5", textDecoration: "underline" }} href='https://github.com/Anuj0918/Videodub-Task'>Github</a></p>
        </Text>
      </div>
      <Card align='center' shadow="sm" padding="lg" radius="md" mt="lg" bg="dark.8" style={{ color: "white" }}>
        <div className='flex flex-col gap-2'>
          <Group grow style={{ width: "100%", display: "flex", justifyContent: "center", gap: "20px", marginBottom: "9px" }}>
            <Button style={{ backgroundColor: "#808080", padding: "6px", borderRadius: "7px" }} onClick={resetText} color="gray" className='hover:cursor-pointer'>Reset All</Button>
            <Button style={{ backgroundColor: "#808080", padding: "6px", borderRadius: "7px", fontWeight: "700" }} onClick={() => setIsBold((prev) => !prev)} color={isBold ? "blue" : "gray"} className='hover:cursor-pointer'>Bold</Button>
            <Button style={{ backgroundColor: "#808080", padding: "6px", borderRadius: "7px", textDecoration: "underline" }} onClick={() => setIsUnderline((prev) => !prev)} color={isUnderline ? "blue" : "gray"} className='hover:cursor-pointer'>Line</Button>
          </Group>
          <Group mt="md" style={{ display: "flex", gap: "5px", width: "100%", justifyContent: "center" }}>
            <Text mt="md">FG</Text>
            <Button style={{ backgroundColor: "#808080", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#808080")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#FF0000", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#FF0000")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#9A9A00", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#9A9A00")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#007AFF", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#007AFF")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#FF00FF", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#FF00FF")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#00A79D", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#00A79D")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#FFFFFF", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setFgColor("#FFFFFF")} className='hover:cursor-pointer'></Button>
          </Group>
          <Group mt="md" style={{ display: "flex", gap: "5px", width: "100%", justifyContent: "center" }}>
            <Text mt="md">BG</Text>
            <Button style={{ backgroundColor: "#001F2D", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#001F2D")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#D9534F", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#D9534F")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#607D8B", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#607D8B")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#708090", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#708090")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#7E57C2", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#7E57C2")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#A0A0A0", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#A0A0A0")} className='hover:cursor-pointer'></Button>
            <Button style={{ backgroundColor: "#EAE0C8", width: "3rem", height: "2rem", borderRadius: "7px" }} onClick={() => setBgColor("#EAE0C8")} className='hover:cursor-pointer'></Button>
          </Group>
          <Textarea
            label="Your Text"
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
            styles={{ input: { color: fgColor, backgroundColor: bgColor, fontWeight: isBold ? "bold" : "normal", textDecoration: isUnderline ? "underline" : "none", resize: "none", width: "25rem", height: "9rem" } }}

          />
          <Button fullWidth mt="md" color="blue" align="center" className='hover:cursor-pointer' onClick={copyToClipboard}>
            <p className='bg-blue-500 w-[17rem] m-auto h-[2.5rem] flex content-center justify-center items-center rounded-md text-white'>Copy text as Discord formatted</p>
          </Button>
        </div>
      </Card>
    </Container>
  )
}

export default App