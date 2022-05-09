import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint16("v1")
	.uint32("v2")
	.uint32("v3")
	.swstring("v4")
	.swstring("v5")