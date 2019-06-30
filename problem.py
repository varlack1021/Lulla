
def passing(input):
    response = {}

    for key in input.keys():
        if type(input[key]) == dict:
            key = 0
        else:
            pass

def makeDict(oldKey, dictIn):
    dictOut = {}

    for key in dictIn.keys():
        if type(dictIn[key]) != dict:
            dictOut[(oldKey+"."+key) if oldKey != None else key] = dictIn[key]
        else:
            dictOut.update(makeDict(((oldKey+"."+key) if oldKey != None else key), dictIn[key]))
    
    return dictOut

a = {
    'key': 3,
    'foo': {
        'a': 5,
        'bar': {
            'baz': 5
        }
    }
}
b = {
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}

print(makeDict(None, b))

# Chrome - close all tabs to the right.
'''
iterm
'''