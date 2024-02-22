import './MyLabel.css'

interface Props {
    /** 
     * Label
    */
    label: string,
    /*
    * Size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3',
    /**
     * Color of the label
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
    /**
     * Capitalize all the letters
     */
    AllCaps?: Boolean,
    /**
     * Font color
     */
    fontColor?: string,

}

const MyLabel = ({label, size='normal', color, AllCaps=false, fontColor}:Props) => {
  return (
    <>
    {
        AllCaps?(
            <span style={{color: fontColor}} className={`${size} ${color}`}>{label.toUpperCase()}</span>
        ) :
        (
            <span style={{color: fontColor}} className={`${size} ${color} `}>{label}</span>
        )
    }
    </>
  )
}

export default MyLabel