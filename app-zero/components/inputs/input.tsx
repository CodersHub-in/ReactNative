import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface Props {
    style: string,
    title: string,
    placeholder: string,
    keyboardType: any
}
const Input: React.FC<Props> = ({ style, title, placeholder, keyboardType }) => {
    return (
        <View className={`flex flex-col  justify-center items-center w-[90vw] m-3 ${style}`}>
            <Text className='text-white w-full text-lg'>{title || `Title`}</Text>
            <TextInput
                className='w-full text-white border border-white border-solid h-12 rounded-full pl-3'
                placeholder={placeholder || 'Enter Here'}
                placeholderTextColor='#9e9e9e'
                keyboardType={keyboardType || 'default'}
            />
        </View>
    )
}

export default Input