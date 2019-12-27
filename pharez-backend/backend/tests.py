'''
def addition(n): return n + n

numbers = [1, 2, 3, 4]
result = map(addition, numbers)
colors = ["red", "blue", "orange"]
RGB = ["11" ]
dic = {"r" : "AB12", "b": "22"}
r = 1
g = 2
b = 3
def makeColor(color, value):
	dic[color] = value
	return dic
result = map(makeColor, colors, RGB)

#t = dict(r =r, g=g, b=b)
#print(t)
#print(result)
#print(list(result))
def parse_html_color(color):
    color_value = PRESET_COLORS.get(color.lower(), color)
  
    if len(color_value) == 7:
      r ,g,b=(int(color_value[x:x+2],16) for x in range(1,7,2))
    
    else:
       r,g,b=((int(color_value[x] * 2,16)) for x in range (1,4))
    colors = dict(r=r, g=g, b=b)
    return colors  
similar = {
              "0": ["O", "Q"],
              "Q": ["O", "0"],
              "O": ["Q", "0"],
              "1": ["I", "T"],
              "T": ["I", "1"],
              "I": ["T", "1"],
              "2": ["Z"],
              "5": ["S"],
              "8": ["B"]
  }  
string="trueQ"
string1="a a a "
for key in similar:
	print(key)
	
if "a" not in string1:
	print("trueQ	")

def similar_license_plates(plate1,plate2):
  print("{}  {}".format(plate1, plate2))
  similar = {
              "0": ["O", "Q"],
              "Q": ["O", "0"],
              "O": ["Q", "0"],
              "1": ["I", "T"],
              "T": ["I", "1"],
              "I": ["T", "1"],
              "2": ["Z"],
              "5": ["S"],
              "8": ["B"],
  }

  for char in plate1:
    if char in plate2:
      return True
    
    if char not in similar:
      continue
    
    else:
      sim_lis = similar[char]
    
      for letter in sim_lis:
        if letter in plate2: 
          return True
          
  return False


print(similar_license_plates("BOX", "XOB"))

x = 0
while x >= 0:
	print(x)
	x = x- 1

  if cut < 0:
    return -1
  slices = None
  if cut ==0:
    slices = 1
    return 1
  prev_number_slices = 1

  x = 1
  while x <= cut:
    
    slices = (x * 2) + (prev_number_slices - x)
    prev_number_slices = slices  
    x = x + 1
  print(slices)
  return slices
    #return cut * 2 + (max_pizza(cut-1) - cut)
    	def resolve_service(self, info, service, args):

		query = schema_services.Services.get_query(info)
				service_name =  db_session.query(ModelService).filter_by(service=service).all()
'''
'''import hashlib 
x = "Data to be hashed"
hashed = hashlib.sha256(x.encode()).hexdigest()
print(hashed)
y = "Data to be hashed"
hashed1 = hashlib.sha256(y.encode()).hexdigest()
print(hashed1)

if hashed1 == hashed:
	print("True")
string = 'AFG'
if 'A' and 'T' in string:
	print('Truesssa')
#for x in range(10):
	#if x == 5:
		#return("Yup")
if type(4) is int:
	print("is int")
#m.update(b"Words to be updated")
#m.update(b"Word that is hashed")
#m.digest()
'''



import datetime
#how does this format work?
def make_readable(seconds):
  hours, seconds = divmod(seconds, 3600)
  minutes, seconds = divmod(seconds, 60)
  return '{:02}:{:02}:{:02}'.format(hours, minutes, seconds)

def tribonacci(signature,n):
    while len(signature) < n:
        signature.append(sum(signature[-3:]))
    
    return signature[:n]
    #your code here


def decompose(n):
    goal = 0
    result = [n]
    while result:
        current = result.pop()
        goal += current ** 2
        for i in range(current - 1, 0, -1):
            if goal - (i ** 2) >= 0:
                goal -= i ** 2
                result.append(i)
                if goal == 0:
                    result.sort()
                    return result
    return None

def last_digit(n1, n2):
  return pow( n1, n2, 10 )

    #last digit there is also a pattern involved here
    #where the last 4 digits will also repeat

x = 94
x = str(x)
x = list(x)
print(sorted(x))

def stock_list(listOfArt, listOfCat):
    dic = {}
    print(listOfArt)
    result = ""
    
    if listOfArt == [] or listOfCat == []:
        return result
    
    for data in listOfArt:
        book_data = data.split(" ")
        book_code = book_data[0][0]
        quantity = int(book_data[1])
        
        if book_code in dic:  dic[book_code] = dic[book_code] + quantity
        
        else: dic[book_code] = quantity
    
    #can use a .join in instead and list comprehension
    for category in listOfCat:
        if category == listOfCat[len(listOfCat)-1]:
          if category not in dic:
            result += '({} : {})'.format(category, 0)    
          else:
            result += '({} : {})'.format(category, dic[category])  
          break
        if category not in dic:
            result += '({} : {}) - '.format(category, 0)    
        else:
            result += '({} : {}) - '.format(category, dic[category])
    return result
    
    def stock_list(stocklist, categories):
    if not stocklist or not categories:
        return ""
    return " - ".join(
        "({} : {})".format(
            category,
            sum(int(item.split()[1]) for item in stocklist if item[0] == category))
        for category in categories)
