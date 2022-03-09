
/**
 * 结构说明：
 * 1、原有字段完全不变，避免有人在代码里引用了原有字段而导致问题
 * 2、添加字段：
 *  1）、moduleType用来标识路由所属模块
 *  2）、componentPath用来在currentModuleType === moduleType || moduleType === 'common' 时的路径生成component
 *  3）、componentId组件唯一判断依据(原来结构中的id不动，不做处理)
 *  4）、parentComId父组件componentId用于后端处理树结构
 *  5）、level，层级，暂时无用
 */

const backendRoutes = [
];

module.exports = {backendRoutes: backendRoutes}
