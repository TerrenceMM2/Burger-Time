module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    $gt: 1
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    });

    Burger.associate = function(model) {
        model.Burger.belongsTo(model.Customer, {
            foreignKey: "CustomerId",
            targetKey: "id"
        });
    };

    return Burger;
};