import React from 'react'

interface TransitionProps {
  sampleProp: string
}

const withTransitionsLogic = (WrappedComponent: React.FC<TransitionProps>): React.FC => {
  const enrichedComponent = (): JSX.Element => {
    const sampleProp = "sampleProp"
    return (
      <WrappedComponent
        sampleProp={sampleProp}
      />
    )
  }
  return enrichedComponent
}

export default withTransitionsLogic
