module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      patientId: { type: DataTypes.INTEGER, primaryKey: true },
      fullname: DataTypes.STRING,
      planId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'patients',
      underscored: true,
    }
  );
  

  return Patient;
};