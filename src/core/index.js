const funcNames = ['addCalc', 'subCalc', 'mutiCalc', 'diviCalc']
const operatorToFunc = {
    "+": 'addCalc',
    "-": 'subCalc',
    "*": 'mutiCalc',
    "/": 'diviCalc'
}
module.exports = function ({ template: template, types: t }) {
    const buildFun = template(`
  FUNCTION_NAME(ARGS);
`);
    const buildRequire = template(`
  var PROPERTIES = require(RESOURCE)
`);
    function perObjectExpressAST(keys) {
        var properties = keys.map(function (key) {
            return t.objectProperty(t.identifier(key), t.identifier(key), false, true)
        })
        return t.objectPattern(properties)
    }

    return {
        visitor: {
            Program: {
                exit(path) {
                    path.unshiftContainer("body", buildRequire({
                        PROPERTIES: perObjectExpressAST(funcNames),
                        RESOURCE: t.stringLiteral("calc/calc.js")
                    }))
                }
            },
            BinaryExpression: {
                // dfs 遍历，因此在最后退出的时候再进行转换
                exit(path) {
                    const node = path.node
                    const args = [node.left, node.right]
                    let operator = node.operator
                    path.replaceWith(
                        buildFun({
                            FUNCTION_NAME: t.identifier(operatorToFunc[operator]),
                            ARGS: args
                        })
                    )
                }
            }
        }
    }
}