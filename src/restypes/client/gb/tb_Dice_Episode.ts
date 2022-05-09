import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint16("v2")
	.swstring("v3")
	.uint32("v4")
	.swstring("v5")