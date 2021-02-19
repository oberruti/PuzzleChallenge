import React, { useCallback, useState } from 'react';
import Options from './components/options';
import ProgressBar from './components/progressBar';

function App() {
  const [progress, setProgress] = useState(0)
  const [intervalId, setIntervalId] = useState<any>()

  const onClickStart = useCallback(
    () => {
      const interval = setInterval(() => {
        setProgress(progress => progress + 1)
        setIntervalId(interval)
      }, 500)
    },
    [setProgress, setIntervalId],
  )

  const onClickStop = useCallback(() => {
      clearInterval(intervalId)
  }, [intervalId])

  const onClickReset = useCallback(() => {
    clearInterval(intervalId)
    setProgress(0)
  }, [intervalId, setProgress])

  return (
    <div>
      <ProgressBar progress={progress} />
      <Options onClickStart={onClickStart} onClickStop={onClickStop} onClickReset={onClickReset} />
    </div>
  );
}

export default App;
