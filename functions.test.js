const {functions}=require('./functions')

test('testing addition functionality',()=>{
    expect(functions.add(2,2)).toBe(4)
}
)


test('testing sub functionality ',()=>{
    expect(functions.add(2,2)).not.toBe(0)
}
)

test('usign toEqual',()=>{
    expect(functions.createObject()).toEqual({"name":'kali',age:21})
})

test(`using to check greater than function`,()=>{
    expect(functions.age()).toBeGreaterThan(18)
})


test(`we can also use regular expressions`,()=>{
    expect(`kala`).not.toMatch(/I/i) //case insensitive regex to check wether I present or not in the string
})

test(`we can check wether there is required element present or not`,()=>{
    expect([1,3,5,7,11,13]).toContain(13)//toContain takes only one argument
})


//the api call using promise 
test(`lets check async data`,()=>{
    expect.assertions(1) //telling that calling to api should be done atleast one time and only one time
    return functions.fetchUser(1).then(data=>{ //[D] if you dont use return the test will fail?why?
        expect(data.name).toBe(`Leanne Graham`)
     })
})


//Async Await
test(`lets check the same API using async and await`,async()=>{
    expect.assertions(1)
    const data=await functions.fetchUser(4)
    expect(data.name).not.toBe(`gunta nakka`)
})