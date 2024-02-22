import { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../components/MyLabel";

//* 1. Import the component, module or service you want to test, in this case MyLabel
const meta ={
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'], //* 1. Add the tags property to the Meta object
    parameters: {
        layout: 'centered',
    },
    argTypes:{
        size:{
            control: {
                type: 'inline-radio',
                options: ['normal', 'h1', 'h2', 'h3']
            }
        },
        color:{
            control: {
                type: 'inline-radio',
                options: ['text-primary', 'text-secondary', 'text-tertiary']
            }
        },
        AllCaps:{
            control: {
                type: 'boolean'
            }
        },
    
    }
} satisfies Meta<typeof MyLabel>; //* 2. Create a default export for the Meta object
//* satisfies Meta<typeof MyLabel> is a type assertion that checks that the type of the Meta object is compatible with the type of the MyLabel component. This is a way to ensure that the Meta object is correctly defined for the MyLabel component.

export default meta

type Story = StoryObj<typeof MyLabel> //* 3. Create a type alias for the Story object

export const Basic: Story = {
    args:{
        label: 'Hello World'
    }
}
export const AllCaps: Story = {
    args:{
        label: 'All caps model',
        AllCaps: true
    }
}
export const Secondary: Story = {
    args:{
        label: 'Secondary Label',
        color: 'text-secondary'
    }
}
export const CustomColor: Story = {
    args:{
        label: 'Custom color label',
        fontColor: '#81d8d0'
    }
}
