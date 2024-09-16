# Simple Generic Avatar

simple-generic-avatar is a lightweight(kind of) npm package that generates a simple avatar as an SVG. The avatar displays initials based on a given name with colors and comes with different sizes.

## Usage/Examples

```javascript
import { generateAvatar } from 'simple-generic-avatar';

const myImage = generateAvatar('John', 'Doe', 32, 'violet');

function ReactApp() {
	<img src={myImage} />;
}
```

Image can be used as an 'src' in design librariers or frameworks such as NextJS and it's <Image /> tag.

```javascript
import { generateAvatar } from 'simple-generic-avatar'

const myImage = generateAvatar("John", "Doe", 32, "violet")

function NextApp() {
    <Image src={myImage} //... rest of the parameters />
}
```

## Documentation

Package exports single function named _generateAvatar_. There are only 4 values that can be passed as props:

- _name_ - John
- _surname_ - Doe
- _size_ - Square format only, ex. 16 - 16x16, 64 - 64x64 etc.
- _color_? - Color as a one of the given string values (ex. "red"). If not provided, color will be randomized.

## Authors

- [@kayYZ1](https://www.github.com/kayYZ1)

## License

[MIT](https://choosealicense.com/licenses/mit/)
